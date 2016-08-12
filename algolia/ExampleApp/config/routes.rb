Rails.application.routes.draw do

  root to: "pages#homepage"

  get "/players" => "players#index", as: :players_index
  get "/tweets" => "tweets#index", as: :tweets_index

end
