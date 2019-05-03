# == Schema Information
#
# Table name: playlist_followers
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  follower_id :integer          not null
#  playlist_id :integer          not null
#

require 'test_helper'

class PlaylistFollowerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
