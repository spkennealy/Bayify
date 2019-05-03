class CreateArtistFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_followers do |t|
      t.integer :follower_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end

    add_index :artist_followers, [:follower_id, :artist_id], unique: true
    add_index :artist_followers, :artist_id
  end
end
