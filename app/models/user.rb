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
    validates :password, length: { minimum: 8, allow_nil: true }
    
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

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
