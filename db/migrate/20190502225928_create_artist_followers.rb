class CreateArtistFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_followers do |t|

      t.timestamps
    end
  end
end
