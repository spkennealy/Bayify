# class AddColumnsToPlaylistFollowers < ActiveRecord::Migration[5.2]
#   def change
#     add_column :playlist_followers, :follower_id, :integer, null: false
#     add_column :playlist_followers, :playlist_id, :integer, null: false
    
#     add_index :playlist_followers, [:follower_id, :playlist_id], unique: true
#     add_index :playlist_followers, :playlist_id
#   end
# end
