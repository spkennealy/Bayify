# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, presence: true

    has_many :albums 
    has_many :tracks,
        through: :albums,
        source: :tracks
    has_many :artist_follows,
        foreign_key: :artist_id,
        class_name: :ArtistFollower
    has_many :followers, 
        through: :artist_follows,
        source: :follower
    has_one_attached :artist_photo
    has_one_attached :background_photo

    def self.search_by_name(name)
        name = "%#{name}%"
        albums = Artist.where("name LIKE ?", name)
    end

end
