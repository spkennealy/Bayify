# == Schema Information
#
# Table name: tracks
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  track_length :integer          not null
#  album_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Track < ApplicationRecord
    validates :title, :track_length, :album_id, presence: true

    belongs_to :album
    has_many :track_follows,
        foreign_key: :track_id,
        class_name: :TrackFollower
    has_many :followers,
        through: :track_follows,
        source: :follower
    has_many :playlists_tracks
    has_many :playlists, 
        through: :playlist_tracks,
        source: :playlist
    has_one_attached :track

end
