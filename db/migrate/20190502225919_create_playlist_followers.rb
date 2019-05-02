class CreatePlaylistFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_followers do |t|

      t.timestamps
    end
  end
end
