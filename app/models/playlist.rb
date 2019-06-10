# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  curator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :title, :curator_id, presence: true

    belongs_to :curator,
        foreign_key: :curator_id,
        class_name: :User
    has_many :playlist_tracks 
    has_many :playlist_follows,
        foreign_key: :playlist_id,
        class_name: :PlaylistFollower
    has_many :tracks, 
        through: :playlist_tracks,
        source: :track
    has_many :followers, 
        through: :playlist_follows,
        source: :follower
    has_one_attached :playlist_photo

    def self.search_by_title(title)
        title = "%#{title}%"
        albums = Playlist.where("title LIKE ?", title)
    end
end
