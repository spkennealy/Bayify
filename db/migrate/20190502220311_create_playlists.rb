class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :curator_id, null: false
      t.timestamps
    end

    add_index :playlists, :curator_id
  end
end
