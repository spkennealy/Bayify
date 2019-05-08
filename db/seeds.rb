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
    curry_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/user_photos/Steph_Curry.jpg')
    curry.profile_photo.attach(io: curry_photo, filename: 'Steph_Curry')

    # ------------------------------------------------------------------------- #
    # ------------------------------ ARTISTS ---------------------------------- #
    # ------------------------------------------------------------------------- #

    # --------------- G-EAZY ---------------
    g_eazy = Artist.create!(name: "G-Eazy")
    g_eazy_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/g-eazy.jpeg')
    g_eazy.artist_photo.attach(io: g_eazy_photo, filename: 'g_eazy_artist_photo')
    g_eazy_background_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/g-eazy_background.jpeg')
    g_eazy.background_photo.attach(io: g_eazy_background_photo, filename: 'g_eazy_background_photo')

    # --------------- MAC DRE ---------------
    mac_dre = Artist.create!(name: "Mac Dre")
    mac_dre_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/mac_dre.jpeg')
    mac_dre.artist_photo.attach(io: mac_dre_photo, filename: 'mac_dre_artist_photo')
    mac_dre_background_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/mac_dre_background_photo.jpg')
    mac_dre.background_photo.attach(io: mac_dre_background_photo, filename: 'mac_dre_background_photo')

    # --------------- E-40 ---------------
    e_40 = Artist.create!(name: "E-40")
    e_40_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/e-40.jpeg')
    e_40_background_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/e-40_background.jpeg')
    e_40.artist_photo.attach(io: e_40_photo, filename: 'e_40_artist_photo')
    e_40.background_photo.attach(io: e_40_background_photo, filename: 'e_40_background_photo')

    # --------------- Andre Nickatina ---------------
    nickatina = Artist.create!(name: "Andre Nickatina")
    nickatina_profile = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/andre_nickatina_profile.jpeg')
    nickatina_background = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/andre_nickatina_background_photo.jpeg')
    nickatina.artist_photo.attach(io: nickatina_profile, filename: 'e_40_artist_photo')
    nickatina.background_photo.attach(io: nickatina_background, filename: 'nickatina_background')

    # too_short = Artist.create!(name: "Too $hort")
    # metallica = Artist.create!(name: "Metallica")
    # green_day = Artist.create!(name: "Green Day")
    # santana = Artist.create!(name: "Santana")
    # the_grateful_dead = Artist.create!(name: "The Grateful Dead")
    # van_morrison = Artist.create!(name: "Van Morrison")

    # ------------------------------------------------------------------------- #
    # ------------------------------ ALBUMS ----------------------------------- #
    # ------------------------------------------------------------------------- #

    # --------------- WHEN IT'S DARK OUT :: G-EAZY ---------------
    when_its_dark_out = Album.create!(
        artist_id: g_eazy.id, 
        title: "When It's Dark Out", 
        year: 2015, 
        genre: "Hip-hop"
    )
    when_its_dark_out_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/when_its_dark_out.jpeg')
    when_its_dark_out.album_photo.attach(io: when_its_dark_out_photo, filename: 'when_its_dark_out_photo')

    # --------------- RONALD DREGAN: DREAGANOMICS :: MAC DRE ---------------
    ronald_dregan = Album.create!(
        artist_id: mac_dre.id, 
        title: "Ronald Dregan: Dreganomics", 
        year: 2004, 
        genre: "Hip-hop"
    )
    ronald_dregan_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/ronald_dregan_dreganomics.jpeg')
    ronald_dregan.album_photo.attach(io: ronald_dregan_photo, filename: 'ronald_dregan_photo')
    
    # --------------- MY GHETTO REPORT CARD :: E-40 ---------------
    my_ghetto_report_card = Album.create!(
        artist_id: e_40.id, 
        title: "My Ghetto Report Card", 
        year: 2006, 
        genre: "Hip-hop"
    )
    my_ghetto_report_card_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/my_ghetto_report_card.jpeg')
    my_ghetto_report_card.album_photo.attach(io: my_ghetto_report_card_photo, filename: 'my_ghetto_report_card_photo')
    
    # --------------- HELL'S KITCHEN :: ANDRE NICKATINA ---------------
    hells_kitchen = Album.create!(
        artist_id: nickatina.id, 
        title: "Hell's Kitchen", 
        year: 2002, 
        genre: "Hip-hop"
    )
    hells_kitchen_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/nickatina-hells_kitchen.jpeg')
    hells_kitchen.album_photo.attach(io: hells_kitchen_photo, filename: 'hells_kitchen_photo')
    
    # --------------- MIDNIGHT MACHINE GUN.. :: ANDRE NICKATINA ---------------
    midnight_machine_gun = Album.create!(
        artist_id: e_40.id, 
        title: "Midnight Machine Gun Rhymes and Alibis", 
        year: 2002, 
        genre: "Hip-hop"
    )
    midnight_machine_gun_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/nicatina-midnight_machine_gun.jpeg')
    midnight_machine_gun.album_photo.attach(io: midnight_machine_gun_photo, filename: 'midnight_machine_gun_photo')

    # ------------------------------------------------------------------------- #
    # ------------------------------ TRACKS ----------------------------------- #
    # ------------------------------------------------------------------------- #

    # --------------- WHEN IT'S DARK OUT TRACKS :: G-EAZY ---------------
    calm_down = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Calm Down",
        track_length: 127
    )
    calm_down_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/08+Calm+Down.m4a')
    calm_down.track.attach(io: calm_down_track, filename: "Calm_Down")

    # --------------- MY GHETTO REPORT CARD TRACKS :: E-40 ---------------
    tell_me_when_to_go = Track.create!(
        album_id: my_ghetto_report_card.id,
        title: "Tell Me When to Go (feat. Keak Da Sneak and Turf Talk)",
        track_length: 241
    )
    tell_me_when_to_go_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/Tell+Me+When+To+Go.mp3')
    tell_me_when_to_go.track.attach(io: tell_me_when_to_go_track, filename: "Tell_Me_When_To_Go")   
    
    # --------------- RONALD DREGAN: DREAGANOMICS TRACKS :: MAC DRE ---------------
    feelin_myself = Track.create!(
        album_id: ronald_dregan.id,
        title: "Feelin Myself",
        track_length: 225
    )
    feelin_myself_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/Feelin_Myself.mp3')
    feelin_myself.track.attach(io: feelin_myself_track, filename: "Feelin_Myself")
    
    # --------------- HELL'S KITCHEN TRACKS :: ANDRE NICKATINA ---------------
    ayo = Track.create!(
        album_id: hells_kitchen.id,
        title: "Ayo",
        track_length: 207
    )
    ayo_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/01+Ayo.m4a')
    ayo.track.attach(io: ayo_track, filename: "Ayo")

    all_star_chuck_taylors = Track.create!(
        album_id: hells_kitchen.id,
        title: "All Star Chuck Taylors",
        track_length: 222
    )
    all_star_chuck_taylors_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/05+All+Star+Chuck+Taylors.m4a')
    all_star_chuck_taylors.track.attach(io: all_star_chuck_taylors_track, filename: "All Star Chuck Taylors")
    
    # --------------- Midnight Machine Gun Rhymes and Alibis :: ANDRE NICKATINA ---------------
    fa_show = Track.create!(
        album_id: midnight_machine_gun.id,
        title: "Fa Show",
        track_length: 211
    )
    fa_show_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/01+Fa+Show.mp3')
    fa_show.track.attach(io: fa_show_track, filename: "Fa_Show")

    jungle = Track.create!(
        album_id: midnight_machine_gun.id,
        title: "Jungle",
        track_length: 285
    )
    jungle_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/01+Jungle.mp3')
    jungle.track.attach(io: jungle_track, filename: "Jungle")

    # ------------------------------------------------------------------------- #
    # ---------------------------- PLAYLISTS ---------------------------------- #
    # ------------------------------------------------------------------------- #

    # --------------- YAY AREA ---------------
    yay_area = Playlist.create!(
        curator_id: curry.id,
        title: "Yay Area"
    )
    yay_area_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/playlist_photos/yay_area.png')
    yay_area.playlist_photo.attach(io: yay_area_photo, filename: "Yay_Area_Playlist")

    # ------------------------------------------------------------------------- #
    # --------------------------- PLAYLIST TRACKS ----------------------------- #
    # ------------------------------------------------------------------------- #

    PlaylistTrack.create!(track_id: feelin_myself.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: tell_me_when_to_go.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: calm_down.id, playlist_id: yay_area.id)

    # ------------------------------------------------------------------------- #
    # ------------------------- PLAYLIST FOLLOWERS ---------------------------- #
    # ------------------------------------------------------------------------- #

    PlaylistFollower.create!(follower_id: curry.id, playlist_id: yay_area.id)

    # ------------------------------------------------------------------------- #
    # -------------------------- ARTIST FOLLOWERS ----------------------------- #
    # ------------------------------------------------------------------------- #

    ArtistFollower.create!(follower_id: curry.id, artist_id: e_40.id)
    ArtistFollower.create!(follower_id: curry.id, artist_id: g_eazy.id)
    ArtistFollower.create!(follower_id: curry.id, artist_id: mac_dre.id)

    # ------------------------------------------------------------------------- #
    # --------------------------- ALBUM FOLLOWERS ----------------------------- #
    # ------------------------------------------------------------------------- #

    AlbumFollower.create!(follower_id: curry.id, album_id: my_ghetto_report_card.id)
    AlbumFollower.create!(follower_id: curry.id, album_id: when_its_dark_out.id)
    AlbumFollower.create!(follower_id: curry.id, album_id: ronald_dregan.id)

    # ------------------------------------------------------------------------- #
    # --------------------------- TRACK FOLLOWERS ----------------------------- #
    # ------------------------------------------------------------------------- #

    TrackFollower.create!(follower_id: curry.id, track_id: tell_me_when_to_go.id)
    TrackFollower.create!(follower_id: curry.id, track_id: calm_down.id)
    TrackFollower.create!(follower_id: curry.id, track_id: feelin_myself.id)


end