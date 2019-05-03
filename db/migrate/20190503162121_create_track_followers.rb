class CreateTrackFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :track_followers do |t|
      t.integer :follower_id, null: false
      t.integer :track_id, null: false
      t.timestamps
    end

    add_index :track_followers, [:follower_id, :track_id], unique: true
    add_index :track_followers, :track_id
  end
end
