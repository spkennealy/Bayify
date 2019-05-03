# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  track_id    :integer          not null
#  playlist_id :integer          not null
#

class PlaylistTrack < ApplicationRecord
    belongs_to :track
    belongs_to :playlist
end
