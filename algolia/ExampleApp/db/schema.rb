# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160807081218) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "nba_players", force: :cascade do |t|
    t.string   "display_name"
    t.string   "position"
    t.string   "team_display_name"
    t.integer  "points"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "tweets", force: :cascade do |t|
    t.string   "tweet_id"
    t.string   "in_reply_to_status_id"
    t.string   "in_reply_to_user_id"
    t.datetime "timestamp"
    t.string   "source"
    t.string   "text"
    t.string   "retweeted_status_id"
    t.string   "retweeted_status_user_id"
    t.datetime "retweeted_status_timestamp"
    t.string   "expanded_url"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

end
