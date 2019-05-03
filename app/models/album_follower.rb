# == Schema Information
#
# Table name: album_followers
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  album_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class AlbumFollower < ApplicationRecord
    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
    belongs_to :album
end
