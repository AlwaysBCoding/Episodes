class TweetsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    render json: Tweet.all.map { |tweet| tweet.serialize_algolia }
  end

end
