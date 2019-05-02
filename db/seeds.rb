# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

    User.create!(username: "Curry30", password: "password", email: "curry30@gsw.com")


    # BELOW IS REFERENCES TO A DIFFERENT APP THAT I WILL DELETE LATER

    # User.destroy_all
    
    # users = []
    # 80.times { users << Faker::Cannabis.strain }
    # users.uniq!
    # users.length.times { |i| User.create!(username: users[i]) }
    
    # Poll.destroy_all

    # polls = []
    # 30.times { polls << Faker::FunnyName.two_word_name }
    # polls.uniq!
    # polls.length.times { |i| Poll.create!(title: polls[i], author_id: i+120) }

    # Question.destroy_all

    # questions = []
    # 30.times { |i| Question.create!(text: "What is your favorite quote", poll_id: a.sample) }

    # AnswerChoice.destroy_all

    # answer_choices = []
    # 100.times { answer_choices << Faker::TvShows::SouthPark.quote }
    # answer_choices.uniq!
    # answer_choices.length.times { |i| AnswerChoice.create!(text: answer_choices[i], question_id: a.sample) }

    # Response.destroy_all

    # 100.times { Response.create!(question_id: a.sample, author_id: a.sample, answer_choice_id: a.sample) }

end