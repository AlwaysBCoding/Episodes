class NbaPlayer < ApplicationRecord
  @@ALGOLIA_INDEX_NAME = "nba_players"

  after_create :index_to_algolia
  after_destroy :remove_from_algolia

  def serialize_algolia
    {
      objectID: self.id,
      display_name: self.display_name,
      position: self.position,
      team_display_name: self.team_display_name,
      points: self.points
    }
  end

  def self.algolia_import
    index = Algolia::Index.new(@@ALGOLIA_INDEX_NAME)
    index.add_objects(NbaPlayer.all.map(&:serialize_algolia))
  end

  def index_to_algolia
    index = Algolia::Index.new(@@ALGOLIA_INDEX_NAME)
    index.save_object(self.serialize_algolia)
  end

  def remove_from_algolia
    index = Algolia::Index.new(@@ALGOLIA_INDEX_NAME)
    index.delete_object(self.id)
  end

end
