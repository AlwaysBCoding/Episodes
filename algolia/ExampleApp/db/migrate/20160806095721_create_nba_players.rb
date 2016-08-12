class CreateNbaPlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :nba_players do |t|
      t.string :display_name
      t.string :position
      t.string :team_display_name
      t.integer :points
      t.timestamps
    end
  end
end
