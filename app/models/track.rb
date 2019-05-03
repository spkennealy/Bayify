# == Schema Information
#
# Table name: tracks
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  track_length :integer          not null  (IN SECONDS)
#  album_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Track < ApplicationRecord
    validates :title, :track_length, :album_id, presence: true

    belongs_to :album
    # has_many :playlists_tracks
    # has_many :playlists, 
    #     through: :playlist_tracks
    has_one_attached :track

end
