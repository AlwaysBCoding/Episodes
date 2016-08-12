class PlayersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    render json: NbaPlayer.all.map { |player| player.serialize_algolia }
  end

end
