# == Schema Information
#
# Table name: artist_followers
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  follower_id :integer          not null
#  artist_id   :integer          not null
#

class ArtistFollower < ApplicationRecord
    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
    belongs_to :artist
end
