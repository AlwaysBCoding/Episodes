class ReportWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(start_date, end_date)
    puts "SIDEKIQ WORKER GENERATING A REPORT FROM #{start_date} to #{end_date}"
  end

end
