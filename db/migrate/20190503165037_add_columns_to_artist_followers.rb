class AddColumnsToArtistFollowers < ActiveRecord::Migration[5.2]
  def change
    add_column :artist_followers, :follower_id, :integer, null: false
    add_column :artist_followers, :artist_id, :integer, null: false

    add_index :artist_followers, [:follower_id, :artist_id], unique: true
    add_index :artist_followers, :artist_id
  end
end
