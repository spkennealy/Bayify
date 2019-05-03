# == Schema Information
#
# Table name: track_followers
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  track_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class TrackFollower < ApplicationRecord
    # validates :follower_id, :track_id, presence: true

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
    belongs_to :track,
        foreign_key: :track_id,
        class_name: :Track
end
