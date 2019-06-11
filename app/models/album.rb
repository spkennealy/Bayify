# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  genre      :string
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :title, :year, :artist_id, presence: true

    has_many :tracks
    belongs_to :artist 
    has_many :album_follows,
        foreign_key: :album_id,
        class_name: :AlbumFollower
    has_many :followers,
        through: :album_follows,
        source: :follower
    has_one_attached :album_photo

    def self.search_by_title(title)
        title = "%#{title}%"
        albums = Album.where("LOWER(title) LIKE LOWER(?)", title)
    end
end
