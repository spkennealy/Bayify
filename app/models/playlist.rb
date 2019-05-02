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

    belongs_to: :curator,
        foreign_key: :curator_id,
        class_name: :User
    has_many: :playlist_tracks 
    has_many: :playlist_follows
    has_many: :tracks, 
        through: :playlist_tracks
    has_many: :followers, 
        through: :playlist_follows
    has_one_attached: :photo

end
