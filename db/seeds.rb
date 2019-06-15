# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# ADD LATER:
# Tower of Power, Doobey Boys, Khelani, Train, Rappin 4 tay, Marc E Bassy, 
# Tony toni tone, Scrapper Bike, Bobby Brackins, The Grouch, Luniz, Hieroglyphics, 

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
    nickatina.artist_photo.attach(io: nickatina_profile, filename: 'nickatina_artist_photo')
    nickatina.background_photo.attach(io: nickatina_background, filename: 'nickatina_background')

    # --------------- Andre Nickatina ---------------
    dirt_nasty = Artist.create!(name: "Dirt Nasty")
    dirt_nasty_profile = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/dirt_nasty_profile.jpeg')
    dirt_nasty_background = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/dirt_nasty_background.jpeg')
    dirt_nasty.artist_photo.attach(io: dirt_nasty_profile, filename: 'dirt_nasty_artist_photo')
    dirt_nasty.background_photo.attach(io: dirt_nasty_background, filename: 'dirt_nasty_background')

    # --------------- Too $hort ---------------
    too_short = Artist.create!(name: "Too $hort")
    too_short_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/too_short_profile.jpeg')
    too_short_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/too_short_background.png')
    too_short.artist_photo.attach(io: too_short_profile, filename: 'too_short_artist_photo')
    too_short.background_photo.attach(io: too_short_background, filename: 'too_short_background')

    # --------------- Metallica ---------------
    metallica = Artist.create!(name: "Metallica")
    metallica_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/metallica_profile.jpeg')
    metallica_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/metallica_background.jpeg')
    metallica.artist_photo.attach(io: metallica_profile, filename: 'metallica_artist_photo')
    metallica.background_photo.attach(io: metallica_background, filename: 'metallica_background')

    # --------------- Creedance Clearwater Revival ---------------
    ccr = Artist.create!(name: "Creedance Clearwater Revival")
    ccr_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/ccr_profile.jpeg')
    ccr_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/ccr_backgroun_photo.jpeg')
    ccr.artist_photo.attach(io: ccr_profile, filename: 'ccr_artist_photo')
    ccr.background_photo.attach(io: ccr_background, filename: 'ccr_background')

    # --------------- Counting Crows ---------------
    counting_crows = Artist.create!(name: "Counting Crows")
    counting_crows_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/counting_crows_profile.jpeg')
    counting_crows_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/counting_crows_background.jpeg')
    counting_crows.artist_photo.attach(io: counting_crows_profile, filename: 'counting_crows_artist_photo')
    counting_crows.background_photo.attach(io: counting_crows_background, filename: 'counting_crows_background')

    # --------------- Green Day ---------------
    green_day = Artist.create!(name: "Green Day")
    green_day_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/green_day_profile.jpeg')
    green_day_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/green_day_background.jpeg')
    green_day.artist_photo.attach(io: green_day_profile, filename: 'green_day_artist_photo')
    green_day.background_photo.attach(io: green_day_background, filename: 'green_day_background')

    # --------------- Journey ---------------
    journey = Artist.create!(name: "Journey")
    journey_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/journey_profile.jpeg')
    journey_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/journey_background.jpeg')
    journey.artist_photo.attach(io: journey_profile, filename: 'journey_artist_photo')
    journey.background_photo.attach(io: journey_background, filename: 'journey_background')

    # --------------- Keak da Sneak ---------------
    keak_da_sneak = Artist.create!(name: "Keak da Sneak")
    keak_da_sneak_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/keak_da_sneak_profile.jpeg')
    keak_da_sneak_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/keak_da_sneak_background.jpeg')
    keak_da_sneak.artist_photo.attach(io: keak_da_sneak_profile, filename: 'keak_da_sneak_artist_photo')
    keak_da_sneak.background_photo.attach(io: keak_da_sneak_background, filename: 'keak_da_sneak_background')

    # --------------- MC Hammer ---------------
    mc_hammer = Artist.create!(name: "MC Hammer")
    mc_hammer_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/mc_hammer_profile.jpeg')
    mc_hammer_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/mc_hammer_background.jpeg')
    mc_hammer.artist_photo.attach(io: mc_hammer_profile, filename: 'mc_hammer_artist_photo')
    mc_hammer.background_photo.attach(io: mc_hammer_background, filename: 'mc_hammer_background')

    # --------------- Michael Franti ---------------
    michael_franti = Artist.create!(name: "Michael Franti")
    michael_franti_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/michael_franti_profile.jpeg')
    michael_franti_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/michael_franti_background.jpeg')
    michael_franti.artist_photo.attach(io: michael_franti_profile, filename: 'michael_franti_artist_photo')
    michael_franti.background_photo.attach(io: michael_franti_background, filename: 'michael_franti_background')

    # --------------- Papa Roach ---------------
    papa_roach = Artist.create!(name: "Papa Roach")
    papa_roach_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/papa_roach_profile.jpeg')
    papa_roach_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/papa_roach_background.jpeg')
    papa_roach.artist_photo.attach(io: papa_roach_profile, filename: 'papa_roach_artist_photo')
    papa_roach.background_photo.attach(io: papa_roach_background, filename: 'papa_roach_background')

    # --------------- Sally S Baby ---------------
    # sally_s_baby = Artist.create!(name: "Sally S Baby")
    # sally_s_baby_profile = open('')  # TODO: ADD PHOTO
    # sally_s_baby_background = open('')
    # sally_s_baby.artist_photo.attach(io: sally_s_baby_profile, filename: 'sally_s_baby_artist_photo')
    # sally_s_baby.background_photo.attach(io: sally_s_baby_background, filename: 'sally_s_baby_background')

    # --------------- Santana ---------------
    santana = Artist.create!(name: "Santana")
    santana_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/santana_profile.jpeg')
    santana_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/santana_background.jpeg')
    santana.artist_photo.attach(io: santana_profile, filename: 'santana_artist_photo')
    santana.background_photo.attach(io: santana_background, filename: 'santana_background')

    # --------------- Steve Miller Band ---------------
    steve_miller_band = Artist.create!(name: "Steve Miller Band")
    steve_miller_band_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/steve_miller_band_profile.jpeg')
    steve_miller_band_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/steve_miller_band_background.jpeg')
    steve_miller_band.artist_photo.attach(io: steve_miller_band_profile, filename: 'steve_miller_band_artist_photo')
    steve_miller_band.background_photo.attach(io: steve_miller_band_background, filename: 'steve_miller_band_background')

    # --------------- The Grateful Dead ---------------
    grateful_dead = Artist.create!(name: "The Grateful Dead")
    grateful_dead_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/grateful_dead_profile.jpeg')
    grateful_dead_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/grateful_dead_background.jpeg')
    grateful_dead.artist_photo.attach(io: grateful_dead_profile, filename: 'grateful_dead_artist_photo')
    grateful_dead.background_photo.attach(io: grateful_dead_background, filename: 'grateful_dead_background')

    # --------------- Third Eye Blind ---------------
    third_eye_blind = Artist.create!(name: "Third Eye Blind")
    third_eye_blind_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/third_eye_blind_profile.jpeg')
    third_eye_blind_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/third_eye_blind_background.jpeg')
    third_eye_blind.artist_photo.attach(io: third_eye_blind_profile, filename: 'third_eye_blind_artist_photo')
    third_eye_blind.background_photo.attach(io: third_eye_blind_background, filename: 'third_eye_blind_background')

    # --------------- Van Morrison ---------------
    van_morrison = Artist.create!(name: "Van Morrison")
    van_morrison_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/van_morrsion_profile.jpeg')
    van_morrison_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/van_morrsion_background.jpeg')
    van_morrison.artist_photo.attach(io: van_morrison_profile, filename: 'van_morrison_artist_photo')
    van_morrison.background_photo.attach(io: van_morrison_background, filename: 'van_morrison_background')

    # --------------- Van Wave ---------------
    van_wave = Artist.create!(name: "Van Wave")
    van_wave_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/van_wave_profile.jpeg')
    van_wave_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/van_wave_background.jpeg')
    van_wave.artist_photo.attach(io: van_wave_profile, filename: 'van_wave_artist_photo')
    van_wave.background_photo.attach(io: van_wave_background, filename: 'van_wave_background')

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

    # --------------- THE BEAUTIFUL & DAMNED :: G-EAZY ---------------
    beautiful_and_damned_album = Album.create!(
        artist_id: g_eazy.id, 
        title: "The Beautiful & Damned", 
        year: 2017, 
        genre: "Hip-hop"
    )
    beautiful_and_damned_album_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/the_beautiful_and_damned_album_photo.jpeg')
    beautiful_and_damned_album.album_photo.attach(io: beautiful_and_damned_album_photo, filename: 'beautiful_and_damned_photo')

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
    
    # --------------- ** SINGLES ** :: E-40 ---------------
    e_40_singles = Album.create!(
        artist_id: e_40.id, 
        title: "Singles", 
        year: 2019, 
        genre: "Hip-hop"
    )
    e_40_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    e_40_singles.album_photo.attach(io: e_40_singles_photo, filename: 'e_40_singles_photo')
    
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
        artist_id: nickatina.id, 
        title: "Midnight Machine Gun Rhymes and Alibis", 
        year: 2002, 
        genre: "Hip-hop"
    )
    midnight_machine_gun_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/nicatina-midnight_machine_gun.jpeg')
    midnight_machine_gun.album_photo.attach(io: midnight_machine_gun_photo, filename: 'midnight_machine_gun_photo')
    
    # --------------- DIRT NASTY :: DIRT NASTY ---------------
    dirt_nasty_album = Album.create!(
        artist_id: dirt_nasty.id, 
        title: "Dirt Nasty", 
        year: 2007, 
        genre: "Hip-hop"
    )
    dirt_nasty_album_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/dirt_nasty_album_photo.jpeg')
    dirt_nasty_album.album_photo.attach(io: dirt_nasty_album_photo, filename: 'dirt_nasty_album_photo')
    
    # --------------- WILLY AND THE POOR BOYS :: Creedance Clearwater Revival ---------------
    willy_poor_boys_album = Album.create!(
        artist_id: ccr.id, 
        title: "Willy and the Poor Boys", 
        year: 1969, 
        genre: "Rock-n-roll"
    )
    willy_poor_boys_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/Willy_and_the_poor_boys_ccr_album.jpg')
    willy_poor_boys_album.album_photo.attach(io: willy_poor_boys_album_photo, filename: 'willy_poor_boys_album_photo')

    # Pending: Counting Crows, Green Day, 
    # Journey, Keak da Sneak, Metallica, MC Hammer, Michael Franti, Papa Roach, 
    # Sally S Baby, Santana, Steve Miller Band, The Grateful Dead, Third Eye Blind, 
    # Too $hort, Van Morrison, Van Wave

    # Completed: Creedance Clearwater Revival, 

    # ------------------------------------------------------------------------- #
    # ------------------------------ TRACKS ----------------------------------- #
    # ------------------------------------------------------------------------- #

    # --------------- THESE THINGS HAPPEN TRACKS :: G-EAZY ---------------   
    
    # him_and_I = Track.create!(
    #     album_id: these_things_happen.id,
    #     title: "",
    #     track_length: 
    # )
    # him_and_I_track = open('')
    # him_and_I.track.attach(io: him_and_I_track, filename: "him_and_I")

    # --------------- WHEN IT'S DARK OUT TRACKS :: G-EAZY ---------------    
    intro_when_its_dark_out = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Intro",
        track_length: 71
    )
    intro_when_its_dark_out_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/01+Intro.m4a')
    intro_when_its_dark_out.track.attach(io: intro_when_its_dark_out_track, filename: "intro_when_its_dark_out")
        
    random = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Random",
        track_length: 180
    )
    random_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/02+Random.m4a')
    random.track.attach(io: random_track, filename: "random")
        
    me_myself_and_I = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Me, Myself & I (feat. Bebe Rehxa)",
        track_length: 241
    )
    me_myself_and_I_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/03+Me%2C+Myself+%26+I.m4a')
    me_myself_and_I.track.attach(io: me_myself_and_I_track, filename: "me_myself_and_I")
        
    one_of_them = Track.create!(
        album_id: when_its_dark_out.id,
        title: "One of Them (feat. Big Sean)",
        track_length: 199
    )
    one_of_them_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/04+One+of+Them+(feat.+Big+Sean).m4a')
    one_of_them.track.attach(io: one_of_them_track, filename: "one_of_them")
        
    drifting = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Drifting (feat. Chris Brown & Tory Lanez)",
        track_length: 253
    )
    drifting_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/05+Drifting+(feat.+Chris+Brown+%26+Tory+Lanez).m4a')
    drifting.track.attach(io: drifting_track, filename: "drifting")
        
    of_all_things = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Of All Things (feat. Too $hort)",
        track_length: 213
    )
    of_all_things_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/06+Of+All+Things+(feat.+Too+%24hort).m4a')
    of_all_things.track.attach(io: of_all_things_track, filename: "of_all_things")
        
    order_more = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Order More (feat. Starrah)",
        track_length: 208
    )
    order_more_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/07+Order+More+(feat.+Starrah).m4a')
    order_more.track.attach(io: order_more_track, filename: "order_more")
        
    calm_down = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Calm Down",
        track_length: 127
    )
    calm_down_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/08+Calm+Down.m4a')
    calm_down.track.attach(io: calm_down_track, filename: "Calm_Down")

    dont_let_me_go = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Don't Let Me Go (feat. Grace)",
        track_length: 191
    )
    dont_let_me_go_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/09+Don\'t+Let+Me+GO+(feat.+Grace).m4a')
    dont_let_me_go.track.attach(io: dont_let_me_go_track, filename: "dont_let_me_go")
        
    you_got_me = Track.create!(
        album_id: when_its_dark_out.id,
        title: "You Got Me",
        track_length: 208
    )
    you_got_me_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/10+You+Got+Me.m4a')
    you_got_me.track.attach(io: you_got_me_track, filename: "you_got_me")
        
    what_if = Track.create!(
        album_id: when_its_dark_out.id,
        title: "What If (feat. Gizzle)",
        track_length: 253
    )
    what_if_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/11+What+If+(feat.+Gizzle).m4a')
    what_if.track.attach(io: what_if_track, filename: "what_if")
        
    sad_boy = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Sad Boy",
        track_length: 202
    )
    sad_boy_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/12+Sad+Boy.m4a')
    sad_boy.track.attach(io: sad_boy_track, filename: "sad_boy")
        
    some_kind_of_drug = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Some Kind of Drug (feat. Marc E. Bassy)",
        track_length: 222
    )
    some_kind_of_drug_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/13+Some+Kind+of+Drug+(feat.+Marc+E.+Bassy).m4a')
    some_kind_of_drug.track.attach(io: some_kind_of_drug_track, filename: "some_kind_of_drug")
        
    think_about_you = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Think About You (feat. Quiñ)",
        track_length: 179
    )
    think_about_you_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/14+Think+About+You+(feat.+Quin%CC%83).m4a')
    think_about_you.track.attach(io: think_about_you_track, filename: "think_about_you")
        
    everthing_will_be_ok = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Everything Will Be Ok (feat. Kehlani)",
        track_length: 311
    )
    everthing_will_be_ok_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/15+Everything+Will+Be+OK+(feat.+Kehlani).m4a')
    everthing_will_be_ok.track.attach(io: everthing_will_be_ok_track, filename: "everthing_will_be_ok")
        
    for_this = Track.create!(
        album_id: when_its_dark_out.id,
        title: "For This (feat. IAMNOBODI)",
        track_length: 250
    )
    for_this_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/16+For+This+(feat.+IAMNOBODI).m4a')
    for_this.track.attach(io: for_this_track, filename: "for_this")
        
    nothing_to_me = Track.create!(
        album_id: when_its_dark_out.id,
        title: "Nothing to Me (feat. E-40 & Keyshia Cole)",
        track_length: 329
    )
    nothing_to_me_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/17+Nothing+To+Me+(feat.+Keyshia+Cole+%26+E-40).m4a')
    nothing_to_me.track.attach(io: nothing_to_me_track, filename: "nothing_to_me")

    # --------------- THE BEAUTIFUL & DAMNED :: G-EAZY ---------------
    the_beautiful_and_damned = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "The Beautiful & Damned (feat. Zoe Nash)",
        track_length: 189
    )
    the_beautiful_and_damned_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-01+The+Beautiful+%26+Damned+%5BFeat.+Zoe+Nash%5D.m4a')
    the_beautiful_and_damned.track.attach(io: the_beautiful_and_damned_track, filename: "the_beautiful_and_damned")
    
    pray_for_me = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Pray for Me",
        track_length: 207
    )
    pray_for_me_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-02+Pray+For+Me.m4a')
    pray_for_me.track.attach(io: pray_for_me_track, filename: "pray_for_me")
    
    him_and_I = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Him & I (feat. Halsey)",
        track_length: 268
    )
    him_and_I_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-03+Him+%26+I+%5BWith+Halsey%5D.m4a')
    him_and_I.track.attach(io: him_and_I_track, filename: "him_and_I")
    
    but_a_dream = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "But A Dream",
        track_length: 206
    )
    but_a_dream_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-04+But+A+Dream.m4a')
    but_a_dream.track.attach(io: but_a_dream_track, filename: "but_a_dream")
    
    sober = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Sober (feat. Charlie Puth)",
        track_length: 203
    )
    sober_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-05+Sober+%5BFeat.+Charlie+Puth%5D.m4a')
    sober.track.attach(io: sober_track, filename: "sober")
    
    legend = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Legend",
        track_length: 205
    )
    legend_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-06+Legend.m4a')
    legend.track.attach(io: legend_track, filename: "legend")
    
    no_limit = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "No Limit (feat. ASAP Rocky & Cardi B)",
        track_length: 245
    )
    no_limit_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-07+No+Limit+%5BFeat.+A%24AP+Rocky+%26+Cardi+B%5D.m4a')
    no_limit.track.attach(io: no_limit_track, filename: "no_limit")
    
    the_plan = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "The Plan",
        track_length: 250
    )
    the_plan_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-08+The+Plan.m4a')
    the_plan.track.attach(io: the_plan_track, filename: "the_plan")
    
    thats_a_lot = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "That's a Lot",
        track_length: 214
    )
    thats_a_lot_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-09+That\'s+A+Lot.m4a')
    thats_a_lot.track.attach(io: thats_a_lot_track, filename: "thats_a_lot")
    
    pick_me_up = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Pick Me Up (feat. Anna of the North)",
        track_length: 227
    )
    pick_me_up_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1-10+Pick+Me+Up+%5BFeat.+Anna+Of+The+North%5D.m4a')
    pick_me_up.track.attach(io: pick_me_up_track, filename: "pick_me_up")
    
    gotdamn = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Gotdamn",
        track_length: 172
    )
    gotdamn_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-01+Gotdamn.m4a')
    gotdamn.track.attach(io: gotdamn_track, filename: "gotdamn")
    
    leviathan = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Leviathan (feat. Sam Martin)",
        track_length: 227
    )
    leviathan_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-02+Leviathan+Featuring+Sam+Martin.m4a')
    leviathan.track.attach(io: leviathan_track, filename: "leviathan")
    
    crash_and_burn = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Crash & Burn (feat. Kehlani)",
        track_length: 180
    )
    crash_and_burn_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-03+Crash+%26+Burn+Featuring+Kehlani.m4a')
    crash_and_burn.track.attach(io: crash_and_burn_track, filename: "crash_and_burn")
    
    summer_in_december = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Summer in December",
        track_length: 186
    )
    summer_in_december_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-04+Summer+In+December.m4a')
    summer_in_december.track.attach(io: summer_in_december_track, filename: "summer_in_december")
    
    charles_brown = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Charles Brown (feat. E-40 & Jay-Ant",
        track_length: 288
    )
    charles_brown_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-05+Charles+Brown+Featuring+E-40+%26+Jay+Ant.m4a')
    charles_brown.track.attach(io: charles_brown_track, filename: "charles_brown")
    
    no_less = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "No Less (feat. SG Lewis & Louis Mattrs)",
        track_length: 250
    )
    no_less_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-06+No+Less+Featuring+SG+Lewis+%26+Louis+Mattrs.m4a')
    no_less.track.attach(io: no_less_track, filename: "no_less")
    
    mama_always_told_me = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Mama Always Told Me (feat. Madison Love)",
        track_length: 191
    )
    mama_always_told_me_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-07+Mama+Always+Told+Me+Featuring+Madison+Love.m4a')
    mama_always_told_me.track.attach(io: mama_always_told_me_track, filename: "mama_always_told_me")
    
    fly_away = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Fly Away (feat. Ugochi)",
        track_length: 211
    )
    fly_away_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-08+Fly+Away+Featuring+Ugochi.m4a')
    fly_away.track.attach(io: fly_away_track, filename: "fly_away")
    
    love_is_gone = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Love Is Gone (feat. Drew Love)",
        track_length: 234
    )
    love_is_gone_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-09+Love+Is+Gone+Featuring+Drew+Love.m4a')
    love_is_gone.track.attach(io: love_is_gone_track, filename: "love_is_gone")
    
    eazy = Track.create!(
        album_id: beautiful_and_damned_album.id,
        title: "Eazy (feat. Son Lux)",
        track_length: 309
    )
    eazy_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/2-10+Eazy+Featuring+Son+Lux.m4a')
    eazy.track.attach(io: eazy_track, filename: "eazy")

    # --------------- MY GHETTO REPORT CARD TRACKS :: E-40 ---------------
    tell_me_when_to_go = Track.create!(
        album_id: my_ghetto_report_card.id,
        title: "Tell Me When to Go (feat. Keak Da Sneak and Turf Talk)",
        track_length: 241
    )
    tell_me_when_to_go_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/Tell+Me+When+To+Go.mp3')
    tell_me_when_to_go.track.attach(io: tell_me_when_to_go_track, filename: "Tell_Me_When_To_Go")   
    
    # --------------- ** SINGLES ** :: E-40 ---------------
    choices_warriors = Track.create!(
        album_id: e_40_singles.id,
        title: "Choices (Yup)[Golden State Warriors Remix]",
        track_length: 162
    )
    choices_warriors_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/01+Choices+(Yup)+%5BGolden+State+Warriors+Remix%5D.m4a')
    choices_warriors.track.attach(io: choices_warriors_track, filename: "Choices_Warriors")   
    
    sprinkle_me = Track.create!(
        album_id: e_40_singles.id,
        title: "Sprinkle Me",
        track_length: 250
    )
    sprinkle_me_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/Sprinkle+Me.mp3')
    sprinkle_me.track.attach(io: sprinkle_me_track, filename: "sprinkle_me")   
    
    thick_and_thin = Track.create!(
        album_id: e_40_singles.id,
        title: "Thick and Thin",
        track_length: 293
    )
    thick_and_thin_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/Thick+and+Thin.m4a')
    thick_and_thin.track.attach(io: thick_and_thin_track, filename: "thick_and_thin")   
    
    my_cup = Track.create!(
        album_id: e_40_singles.id,
        title: "My Cup (feat. Suga-T)",
        track_length: 226
    )
    my_cup_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/09+My+Cup+(Featuring+Suga-T).m4a')
    my_cup.track.attach(io: my_cup_track, filename: "my_cup")   
    
    white_gurl = Track.create!(
        album_id: e_40_singles.id,
        title: "White Gurl",
        track_length: 263
    )
    white_gurl_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/11+White+Gurl.mp3')
    white_gurl.track.attach(io: white_gurl_track, filename: "white_gurl")   
    
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
    
    # --------------- DIRT NASTY ALBUM :: DIRT NASTY ---------------
    nineteen_eighty = Track.create!(
        album_id: dirt_nasty_album.id,
        title: "1980",
        track_length: 186
    )
    nineteen_eighty_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/1980.mp3')
    nineteen_eighty.track.attach(io: nineteen_eighty_track, filename: "1980")

    droppin_names = Track.create!(
        album_id: dirt_nasty_album.id,
        title: "Droppin' Names",
        track_length: 215
    )
    droppin_names_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/Droppin+Names.mp3')
    droppin_names.track.attach(io: droppin_names_track, filename: "Droppin_Names")
    
    # --------------- WILLY AND THE POOR BOYS :: Creedance Clearwater Revival  ---------------
    fortunate_son = Track.create!(
        album_id: willy_poor_boys_album.id,
        title: "Fortunate Son",
        track_length: 139
    )
    fortunate_son_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/Fortunate+Son.mp3')
    fortunate_son.track.attach(io: fortunate_son_track, filename: "Fortunate_Son")

    down_on_the_corner = Track.create!(
        album_id: willy_poor_boys_album.id,
        title: "Down on the Corner",
        track_length: 166
    )
    down_on_the_corner_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/Down+On+The+Corner.mp3')
    down_on_the_corner.track.attach(io: down_on_the_corner_track, filename: "Down_on_the_corner")

    # TODO: ---------------   ---------------
    # droppin_names = Track.create!(
    #     album_id: willy_poor_boys_album.id,
    #     title: "",
    #     track_length: 
    # )
    # droppin_names_track = open('')
    # droppin_names.track.attach(io: droppin_names_track, filename: "Droppin_Names")

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