
# The first 30 or so lines is all you need!

browser = Watir::Browser.new(:chrome) 
browser.goto("https://stats.nba.com/game/0021500548/playbyplay/")


# We adjust the original code (see below) since the site has since changed

script =  <<-JAVASCRIPT
angular.reloadWithDebugInfo();                                          
var rows = document.querySelectorAll('tbody')[4].querySelectorAll('tr');
var data = []; 

for(i=0; i < rows.length; i++) {
   var rowData = angular.element(rows[i]).scope().row
   data.push([rowData.EVENTNUM, rowData.HOMEDESCRIPTION, rowData.VISITORDESCRIPTION])
}

return data
JAVASCRIPT

browser.execute_script(script)

data = _

# Tidy

data = data.map { |item| item.compact }.reject { |item| item.length == 1 }


# Done! We got some data using javascript injection








# Sandpit: some things to try in chrome developer console
# angular.reloadWithDebugInfo()

# I'm not sure why running this matters, but certain things don't return correctly without it
angular.reloadWithDebugInfo(); 

# this will get all the plays 
document.querySelectorAll('tbody')[4].querySelectorAll('tr')

# Now, if we provide the above to angular.element().scope().row, then we have:
angular.element(document.querySelectorAll('tbody')[4].querySelectorAll('tr')[0]).scope().row
# Which is what we want (the javascript object)

# Note: to access the attributes in this javascript object, simply .EVENTNUM or .GAME_ID to the end e.g.
angular.element(document.querySelectorAll('tbody')[4].querySelectorAll('tr')[0]).scope().row.GAME_ID



# Example of how to execute javascript from rails console
browser.execute_script("return angular.element('h4').text()")












##### Original Javascript Code from video #####

script =  <<-JAVASCRIPT                                          
var rows = document.query.SelectorAll("table tr.ng-scope");
var data = []; 

for(i=0; i < rows.length; i++) {
   var rowData = angular.element(rows[i]).scope().row
   data.push([rowData.EVENTNUM, rowData.HOMEDESCRIPTION, rowData.VISITORDESCRIPTION])
}

return data
JAVASCRIPT

# Then, to execute the script (that we made using the heredoc)

browser.execute_script(script)






