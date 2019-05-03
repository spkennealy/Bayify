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

require 'test_helper'

class AlbumFollowerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
