class CreateAlbumFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :album_followers do |t|
      t.integer :follower_id, null: false
      t.integer :album_id, null: false
      t.timestamps
    end

    add_index :album_followers, [:album_id, :follower_id], unique: true
    add_index :album_followers, :follower_id
  end
end
