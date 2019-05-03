# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do

    User.create!(username: "Curry30", password: "password", email: "curry30@gsw.com")
    curry = User.find_by(username: "Curry30")

    Artist.create!(name: "G-Eazy")
    Artist.create!(name: "Mac Dre")
    Artist.create!(name: "E-40")
    # Artist.create!(name: "Too $hort")
    # Artist.create!(name: "Metallica")
    # Artist.create!(name: "Green Day")
    # Artist.create!(name: "Santana")
    # Artist.create!(name: "The Grateful Dead")
    # Artist.create!(name: "Van Morrison")

    g = Artist.find_by(name: "G-Eazy")
    Album.create!(
        artist_id: g.id, 
        title: "When It's Dark Out", 
        year: 2015, 
        genre: "Hip-hop"
    )

    mac = Artist.find_by(name: "Mac Dre")
    Album.create!(
        artist_id: mac.id, 
        title: "Ronald Dregan: Dreganomics", 
        year: 2004, 
        genre: "Hip-hop"
    )

    e = Artist.find_by(name: "E-40")
    Album.create!(
        artist_id: e.id, 
        title: "My Ghetto Report Card", 
        year: 2006, 
        genre: "Hip-hop"
    )

    dark_out = Album.find_by(title: "When It's Dark Out")
    calm_down = Track.create!(
        album_id: dark_out.id,
        title: "Calm Down",
        track_length: 127
    )

    calm_down_file = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/08+Calm+Down.m4a')
    calm_down.track.attach(io: calm_down_file, filename: "Calm Down")

    ghetto = Album.find_by(title: "My Ghetto Report Card")
    tell_me = Track.create!(
        album_id: ghetto.id,
        title: "Tell Me When to Go (feat. Keak Da Sneak and Turf Talk",
        track_length: 241
    )
   
    tell_me_file = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/Tell+Me+When+To+Go.mp3')
    tell_me.track.attach(io: tell_me_file, filename: "Tell Me When To Go")   
    
    stupid = Album.find_by(title: "Ronald Dregan: Dreganomics")
    feelin = Track.create!(
        album_id: stupid.id,
        title: "Feelin Myself",
        track_length: 225
    )

    feelin_file = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/Feelin_Myself.mp3')
    feelin.track.attach(io: feelin_file, filename: "Feelin Myself")

    Playlist.create!(
        curator_id: curry.id,
        title: "Yay Area"
    )

end