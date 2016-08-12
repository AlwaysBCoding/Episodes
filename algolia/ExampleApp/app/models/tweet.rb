class Tweet < ApplicationRecord
  @@Algolia_Index_Name = "tweets"

  after_create :index_to_algolia
  after_destroy :remove_from_algolia

  def serialize_algolia
    {
      objectID: self.id,
      tweetID: self.tweet_id,
      in_reply_to_status_id: self.in_reply_to_status_id,
      in_reply_to_user_id: self.in_reply_to_user_id,
      timestamp: self.timestamp.to_i,
      source: self.source,
      text: self.text,
      retweeted_status_id: self.retweeted_status_id,
      retweeted_status_timestamp: self.retweeted_status_timestamp.to_i,
      expanded_url: self.expanded_url
    }
  end

  def self.algolia_import
    self.all.each_slice(1000) do |batch|
      index = Algolia::Index.new(@@Algolia_Index_Name)
      index.add_objects(batch.map { |tweet| tweet.serialize_algolia })
    end
  end

  def index_to_algolia
    index = Algolia::Index.new(@@Algolia_Index_Name)
    index.save_object(self.serialize_algolia)
  end

  def remove_from_algolia
    index = Algolia::Index.new(@@Algolia_Index_Name)
    index.delete_object(self.id)
  end


end
