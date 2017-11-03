require 'socket'

@bot_running = true
@running = true

TWITCH_HOST = "irc.chat.twitch.tv"
TWITCH_PORT = 6667

class TwitchBot
  def initialize
    @nickname = "twitch-account-used-to-login" # name of your bot / twitch account used to log in.
    @password = "oauth:token" # aquired from https://twitchapps.com/tmi/
    @channel = "twitch-channel-name" # twitch channel in lowercase
    @socket = TCPSocket.open(TWITCH_HOST, TWITCH_PORT)
    @prev_time = Time.now.to_i
    @curr_time = Time.now.to_i
    write_to_server "PASS #{@password}"
    write_to_server "NICK #{@nickname}"
    write_to_server "USER #{@nickname} 0 * #{@nickname}"
    write_to_server "JOIN ##{@channel}"
  end

  def write_to_server(message)
    # using \r and \n as required by irc to parse messages placing this here so it will get appended to all
    @socket.puts "#{message}\r\n"
  end

  def write_to_c(message)
    write_to_server("PRIVMSG ##{@channel} :#{message}")
  end

  def run
      message = @socket.gets
      puts message

      if message.match(/^PING :(.*)$/)
        # if you want to do something when pinged by twitch you may do so
        # this has an approximated interval of 5 minutes.
      end
      
      if message.match(/PRIVMSG ##{@channel} :(.*)$/)
        content = $~[1]
        username = message.match(/@(.*).tmi.twitch.tv/)[1]
        if content.include? "coffee"
          write_to_c("Put that coffee down!")
        end

        outputmsg = "[#{username}] #{content}"
        # adding all parametres for growlnotify to display correct toast messages - requires alot of escape characters
        growl_line = "growlnotify.exe " + "/t:" + "\"TwitchChat\" " + "/i:" + "\".\\"+"jb.png\" " + "\""+"#{outputmsg}"+"\""
        # outputting to system commandline
        system "#{growl_line}"
      end
  end

  def mid_checks
    @curr_time = Time.now.to_i # checking current time and converting to int only (seconds)
    if (@curr_time.to_i - @prev_time.to_i) > 180 # if 3 minutes has passed do the following
      puts "Bot ponging the twitch servers - KEEP US ALIVE!" # this can be commented out to remove console spam
      write_to_server("PONG tmi.twitch.tv") # keeping connection alive with twitch
      @prev_time = Time.now.to_i # resetting comparisment variable to prep for a new round of 3 minutes
    end
  end

  def quit
    # setting all variables and closing down connection to twitch.
    @running = false
    write_to_server ("PART ##{@channel}")
    write_to_server ("QUIT")
    puts "You have succesfully departed twitch - Have a good one!"
    sleep 2
    abort # doing a final termination to exit everything.
  end
end

# Prep the bot
bot = TwitchBot.new
trap("INT") { bot.quit }

# This thread runs the bot and communication with twitch
Thread.new do
  loop do
    bot.run
    if @running == false
      @bot_running = false
    end
  end
end


# This side-thread runs a side-loop to prematurely pong the twitch servers
# so the ping will not disconnect you from their servers
i = 0
loop do
  i += 1
  sleep 1
  bot.mid_checks
end