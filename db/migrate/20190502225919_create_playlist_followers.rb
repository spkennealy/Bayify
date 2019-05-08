class CreatePlaylistFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_followers do |t|
      t.integer :follower_id, null: false
      t.integer :playlist_id, null: false
      t.timestamps
    end

    add_index :playlist_followers, [:follower_id, :playlist_id], unique: true
    add_index :playlist_followers, :playlist_id
  end
end
