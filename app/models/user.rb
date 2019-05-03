# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 4, allow_nil: true }

    has_many :curated_playlists,
        foreign_key: :curator_id,
        class_name: :Playlist
    has_many :playlist_follows,
        foreign_key: :follower_id,
        class_name: :PlaylistFollower
    has_many :artist_follows,
        foreign_key: :follower_id,
        class_name: :ArtistFollower
    has_many :album_follows,
        foreign_key: :follower_id,
        class_name: :AlbumFollower
    has_many :track_follows,
        foreign_key: :follower_id,
        class_name: :TrackFollower
    has_many :followed_playlists, 
        through: :playlist_follows,
        source: :playlist
    has_many :followed_artists, 
        through: :artist_follows,
        source: :artist
    has_many :followed_tracks, 
        through: :track_follows,
        source: :track
    has_many :followed_albums,
        through: :album_follows,
        source: :album
    # has_many :friends,  # DOUBLE CHECK IF THIS IS RIGHT
    #     foreign_key: :id,
    #     class_name: :User
    # has_many :followed_podcasts
    has_one_attached :profile_photo

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.valid_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
