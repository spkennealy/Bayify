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

    User.create!(username: "Bayify", password: "password", email: "admin@bayify.com")
    bayify = User.find_by(username: "Bayify")
    bayify_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/user_photos/bayify-logo.png')
    bayify.profile_photo.attach(io: bayify_photo, filename: 'Bayify')

    # ------------------------------------------------------------------------- #
    # ------------------------------ ARTISTS ---------------------------------- #
    # ------------------------------------------------------------------------- #

    # --------------- Andre Nickatina ---------------
    nickatina = Artist.create!(name: "Andre Nickatina")
    nickatina_profile = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/andre_nickatina_profile.jpeg')
    nickatina_background = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/andre_nickatina_background_photo.jpeg')
    nickatina.artist_photo.attach(io: nickatina_profile, filename: 'nickatina_artist_photo')
    nickatina.background_photo.attach(io: nickatina_background, filename: 'nickatina_background')

    # --------------- Dirt Nasty ---------------
    dirt_nasty = Artist.create!(name: "Dirt Nasty")
    dirt_nasty_profile = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/dirt_nasty_profile.jpeg')
    dirt_nasty_background = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/dirt_nasty_background.jpeg')
    dirt_nasty.artist_photo.attach(io: dirt_nasty_profile, filename: 'dirt_nasty_artist_photo')
    dirt_nasty.background_photo.attach(io: dirt_nasty_background, filename: 'dirt_nasty_background')

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

    # --------------- E-40 ---------------
    e_40 = Artist.create!(name: "E-40")
    e_40_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/e-40.jpeg')
    e_40_background_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/e-40_background.jpeg')
    e_40.artist_photo.attach(io: e_40_photo, filename: 'e_40_artist_photo')
    e_40.background_photo.attach(io: e_40_background_photo, filename: 'e_40_background_photo')

    # --------------- G-EAZY ---------------
    g_eazy = Artist.create!(name: "G-Eazy")
    g_eazy_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/g-eazy.jpeg')
    g_eazy.artist_photo.attach(io: g_eazy_photo, filename: 'g_eazy_artist_photo')
    g_eazy_background_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/g-eazy_background.jpeg')
    g_eazy.background_photo.attach(io: g_eazy_background_photo, filename: 'g_eazy_background_photo')

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

    # --------------- Luniz ---------------
    luniz = Artist.create!(name: "Luniz")
    luniz_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/luniz_profile_photo.jpeg')
    luniz_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/luniz_background_photo.jpg')
    luniz.artist_photo.attach(io: luniz_profile, filename: 'luniz_artist_photo')
    luniz.background_photo.attach(io: luniz_background, filename: 'luniz_background')

    # --------------- MAC DRE ---------------
    mac_dre = Artist.create!(name: "Mac Dre")
    mac_dre_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/mac_dre.jpeg')
    mac_dre.artist_photo.attach(io: mac_dre_photo, filename: 'mac_dre_artist_photo')
    mac_dre_background_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/artist_photos/mac_dre_background_photo.jpg')
    mac_dre.background_photo.attach(io: mac_dre_background_photo, filename: 'mac_dre_background_photo')

    # --------------- MC Hammer ---------------
    mc_hammer = Artist.create!(name: "MC Hammer")
    mc_hammer_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/mc_hammer_profile.jpeg')
    mc_hammer_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/mc_hammer_background.jpeg')
    mc_hammer.artist_photo.attach(io: mc_hammer_profile, filename: 'mc_hammer_artist_photo')
    mc_hammer.background_photo.attach(io: mc_hammer_background, filename: 'mc_hammer_background')

    # --------------- Metallica ---------------
    metallica = Artist.create!(name: "Metallica")
    metallica_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/metallica_profile.jpeg')
    metallica_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/metallica_background.jpeg')
    metallica.artist_photo.attach(io: metallica_profile, filename: 'metallica_artist_photo')
    metallica.background_photo.attach(io: metallica_background, filename: 'metallica_background')

    # --------------- Michael Franti ---------------
    michael_franti = Artist.create!(name: "Michael Franti & Spearhead")
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

    # --------------- Too $hort ---------------
    too_short = Artist.create!(name: "Too $hort")
    too_short_profile = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/too_short_profile.jpeg')
    too_short_background = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/artist_photos/too_short_background.png')
    too_short.artist_photo.attach(io: too_short_profile, filename: 'too_short_artist_photo')
    too_short.background_photo.attach(io: too_short_background, filename: 'too_short_background')

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

    # --------------- ** SINGLES ** :: ANDRE NICKATINA ---------------
    nickatina_singles = Album.create!(
        artist_id: nickatina.id, 
        title: "Andre Nickatina Singles", 
        year: 2019, 
        genre: "Hip-hop"
    )
    nickatina_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    nickatina_singles.album_photo.attach(io: nickatina_singles_photo, filename: 'nickatina_singles_photo')


    # --------------- SOMEWHERE UNDER WONDERLAND :: COUNTING CROWS ---------------
    somewhere_under_wonderland = Album.create!(
        artist_id: counting_crows.id, 
        title: "Somewhere Under Wonderland", 
        year: 2014, 
        genre: "Alternative Rock"
    )
    somewhere_under_wonderland_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/CountingCrowsSomewhereUnderWonderland.jpg')
    somewhere_under_wonderland.album_photo.attach(io: somewhere_under_wonderland_photo, filename: 'somewhere_under_wonderland_photo')
    
    # --------------- FILMS ABOUT GHOSTS :: COUNTING CROWS ---------------
    films_about_ghosts = Album.create!(
        artist_id: counting_crows.id, 
        title: "Films About Ghosts: The Best Of...", 
        year: 2003, 
        genre: "Alternative Rock"
    )
    films_about_ghosts_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/counting_crows_films_about_ghosts.jpeg')
    films_about_ghosts.album_photo.attach(io: films_about_ghosts_photo, filename: 'films_about_ghosts_photo')
        
    # --------------- WILLY AND THE POOR BOYS :: Creedance Clearwater Revival ---------------
    willy_poor_boys_album = Album.create!(
        artist_id: ccr.id, 
        title: "Willy and the Poor Boys", 
        year: 1969, 
        genre: "Rock-n-roll"
    )
    willy_poor_boys_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/Willy_and_the_poor_boys_ccr_album.jpg')
    willy_poor_boys_album.album_photo.attach(io: willy_poor_boys_album_photo, filename: 'willy_poor_boys_album_photo')

    # --------------- DIRT NASTY :: DIRT NASTY ---------------
    dirt_nasty_album = Album.create!(
        artist_id: dirt_nasty.id, 
        title: "Dirt Nasty", 
        year: 2007, 
        genre: "Hip-hop"
    )
    dirt_nasty_album_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/dirt_nasty_album_photo.jpeg')
    dirt_nasty_album.album_photo.attach(io: dirt_nasty_album_photo, filename: 'dirt_nasty_album_photo')

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
        title: "E-40 Singles", 
        year: 2019, 
        genre: "Hip-hop"
    )
    e_40_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    e_40_singles.album_photo.attach(io: e_40_singles_photo, filename: 'e_40_singles_photo')

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
        
    # --------------- AMERICAN IDIOT :: GREEN DAY ---------------
    american_idiot = Album.create!(
        artist_id: green_day.id, 
        title: "American Idiot", 
        year: 2004, 
        genre: "Rock-n-roll"
    )
    american_idiot_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/green_day_american_idiot_album.jpeg')
    american_idiot.album_photo.attach(io: american_idiot_photo, filename: 'american_idiot_photo')
    
    # --------------- Greatest Hits: God's Favorite Band :: GREEN DAY ---------------
    green_day_greatest_hits = Album.create!(
        artist_id: green_day.id, 
        title: "Greatest Hits: God's Favorite Band", 
        year: 2017, 
        genre: "Rock-n-roll"
    )
    green_day_greatest_hits_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/green_day_greatest_hits.jpeg')
    green_day_greatest_hits.album_photo.attach(io: green_day_greatest_hits_photo, filename: 'green_day_greatest_hits_photo')
    
    # --------------- Warning :: GREEN DAY ---------------
    warning_album = Album.create!(
        artist_id: green_day.id, 
        title: "Warning", 
        year: 2000, 
        genre: "Rock-n-roll"
    )
    warning_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/green_day_warning_album.jpeg')
    warning_album.album_photo.attach(io: warning_album_photo, filename: 'warning_album_photo')
    
    # --------------- Dookie :: GREEN DAY ---------------
    dookie_album = Album.create!(
        artist_id: green_day.id, 
        title: "Dookie", 
        year: 1994, 
        genre: "Rock-n-roll"
    )
    dookie_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/green_day_dookie.jpeg')
    dookie_album.album_photo.attach(io: dookie_album_photo, filename: 'dookie_album_photo')
    
    # --------------- Nimrod :: GREEN DAY ---------------
    nimrod_album = Album.create!(
        artist_id: green_day.id, 
        title: "Nimrod", 
        year: 1997, 
        genre: "Rock-n-roll"
    )
    nimrod_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/green_day_nimrod.jpeg')
    nimrod_album.album_photo.attach(io: nimrod_album_photo, filename: 'nimrod_album_photo')
        
    # --------------- Greatest Hits :: JOURNEY ---------------
    journey_greatest_hits = Album.create!(
        artist_id: journey.id, 
        title: "Greatest Hits", 
        year: 2006, 
        genre: "Rock-n-roll"
    )
    journey_greatest_hits_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/journey_greatest_hits.jpeg')
    journey_greatest_hits.album_photo.attach(io: journey_greatest_hits_photo, filename: 'journey_greatest_hits_photo')
    
    # --------------- Town Business :: KEAK DA SNEAK ---------------
    town_business_album = Album.create!(
        artist_id: keak_da_sneak.id, 
        title: "Town Business", 
        year: 2005, 
        genre: "Hip-hop"
    )
    town_business_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/town_business_album.jpeg')
    town_business_album.album_photo.attach(io: town_business_album_photo, filename: 'town_business_album_photo')
    
    # --------------- Deified :: KEAK DA SNEAK ---------------
    deified_album = Album.create!(
        artist_id: keak_da_sneak.id, 
        title: "Deified", 
        year: 2008, 
        genre: "Hip-hop"
    )
    deified_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/deified_album.jpeg')
    deified_album.album_photo.attach(io: deified_album_photo, filename: 'deified_album_photo')
    
    # --------------- ** SINGLES ** :: KEAK DA SNEAK ---------------
    keak_da_sneak_singles = Album.create!(
        artist_id: keak_da_sneak.id, 
        title: "Kead da Sneak Singles", 
        year: 2012, 
        genre: "Hip-hop"
    )
    keak_da_sneak_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    keak_da_sneak_singles.album_photo.attach(io: keak_da_sneak_singles_photo, filename: 'keak_da_sneak_singles_photo')
    
    # --------------- ** SINGLES ** :: LUNIZ ---------------
    luniz_singles = Album.create!(
        artist_id: luniz.id, 
        title: "Luniz Singles", 
        year: 2012, 
        genre: "Hip-hop"
    )
    luniz_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    luniz_singles.album_photo.attach(io: luniz_singles_photo, filename: 'luniz_singles_photo')

    # --------------- RONALD DREGAN: DREAGANOMICS :: MAC DRE ---------------
    ronald_dregan = Album.create!(
        artist_id: mac_dre.id, 
        title: "Ronald Dregan: Dreganomics", 
        year: 2004, 
        genre: "Hip-hop"
    )
    ronald_dregan_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/ronald_dregan_dreganomics.jpeg')
    ronald_dregan.album_photo.attach(io: ronald_dregan_photo, filename: 'ronald_dregan_photo')
        
    # --------------- Stupid Doo Doo Dumb :: MAC DRE ---------------
    stupid_doo_doo_dumb_album = Album.create!(
        artist_id: mac_dre.id, 
        title: "Stupid Doo Doo Dumb", 
        year: 1998, 
        genre: "Hip-hop"
    )
    stupid_doo_doo_dumb_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/stupid_doo_doo_dumb.jpeg')
    stupid_doo_doo_dumb_album.album_photo.attach(io: stupid_doo_doo_dumb_album_photo, filename: 'stupid_doo_doo_dumb_album_photo')
    
    # --------------- Thizzle Washington :: MAC DRE ---------------
    thizzle_washington = Album.create!(
        artist_id: mac_dre.id, 
        title: "Thizzle Washington", 
        year: 2002, 
        genre: "Hip-hop"
    )
    thizzle_washington_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/mac_dre_thizzle_washington.jpeg')
    thizzle_washington.album_photo.attach(io: thizzle_washington_photo, filename: 'thizzle_washington_photo')

    # --------------- ** SINGLES ** :: MAC DRE ---------------
    mac_dre_singles = Album.create!(
        artist_id: mac_dre.id, 
        title: "Mac Dre Singles", 
        year: 2019, 
        genre: "Hip-hop"
    )
    mac_dre_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    mac_dre_singles.album_photo.attach(io: mac_dre_singles_photo, filename: 'mac_dre_singles_photo')

    # --------------- ** SINGLES ** :: MC HAMMER ---------------
    mc_hammer_singles = Album.create!(
        artist_id: mc_hammer.id, 
        title: "MC Hammer Singles", 
        year: 1998, 
        genre: "Hip-hop"
    )
    mc_hammer_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    mc_hammer_singles.album_photo.attach(io: mc_hammer_singles_photo, filename: 'mc_hammer_singles_photo')

    # --------------- Metallica :: Metallica ---------------
    metallica_album = Album.create!(
        artist_id: metallica.id, 
        title: "Metallica", 
        year: 1991, 
        genre: "Rock-n-roll"
    )
    metallica_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/metallica_album_cover.jpeg')
    metallica_album.album_photo.attach(io: metallica_album_photo, filename: 'metallica_album_photo')

    # --------------- Master of Puppets :: Metallica ---------------
    master_of_puppets = Album.create!(
        artist_id: metallica.id, 
        title: "Master of Puppets", 
        year: 1986, 
        genre: "Rock-n-roll"
    )
    master_of_puppets_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/metallica_master_of_puppets.jpeg')
    master_of_puppets.album_photo.attach(io: master_of_puppets_photo, filename: 'master_of_puppets_photo')

    # --------------- Reload :: Metallica ---------------
    reload_album = Album.create!(
        artist_id: metallica.id, 
        title: "Reload", 
        year: 1997, 
        genre: "Rock-n-roll"
    )
    reload_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/metallica_reload.jpeg')
    reload_album.album_photo.attach(io: reload_album_photo, filename: 'reload_album_photo')

    # --------------- ** SINGLES ** :: Metallica ---------------
    metallica_singles = Album.create!(
        artist_id: metallica.id, 
        title: "Metallica Singles", 
        year: 1995, 
        genre: "Rock-n-roll"
    )
    metallica_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    metallica_singles.album_photo.attach(io: metallica_singles_photo, filename: 'metallica_singles_photo')

    # --------------- EVERYONE DESEREVES MUSIC :: MICHAEL FRANTI & SPEARHEAD ---------------
    everyone_deserves_music = Album.create!(
        artist_id: michael_franti.id, 
        title: "Everyone Deserves Music", 
        year: 2003, 
        genre: "Reggae"
    )
    everyone_deserves_music_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/michael_franti_everyone_deserves_music.jpeg')
    everyone_deserves_music.album_photo.attach(io: everyone_deserves_music_photo, filename: 'everyone_deserves_music_photo')

    # --------------- STAY HUMAN :: MICHAEL FRANTI & SPEARHEAD ---------------
    stay_human = Album.create!(
        artist_id: michael_franti.id, 
        title: "Stay Human", 
        year: 2001, 
        genre: "Reggae"
    )
    stay_human_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/michael_franti_stay_human.jpeg')
    stay_human.album_photo.attach(io: stay_human_photo, filename: 'stay_human_photo')

    # --------------- ** SINGLES ** :: MICHAEL FRANTI & SPEARHEAD ---------------
    michael_franti_singles = Album.create!(
        artist_id: michael_franti.id, 
        title: "Michael Franti Singles", 
        year: 2019, 
        genre: "Reggae"
    )
    michael_franti_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    michael_franti_singles.album_photo.attach(io: michael_franti_singles_photo, filename: 'michael_franti_singles_photo')

    # --------------- Infest :: PAPA ROACH ---------------
    infest_album = Album.create!(
        artist_id: papa_roach.id, 
        title: "Infest", 
        year: 2001, 
        genre: "Rock-n-roll"
    )
    infest_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/papa_roach_infest_album.jpeg')
    infest_album.album_photo.attach(io: infest_album_photo, filename: 'infest_album_photo')

    # --------------- ** SINGLES ** :: PAPA ROACH ---------------
    papa_roach_singles = Album.create!(
        artist_id: papa_roach.id, 
        title: "Papa Roach Singles", 
        year: 2004, 
        genre: "Rock-n-roll"
    )
    papa_roach_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    papa_roach_singles.album_photo.attach(io: papa_roach_singles_photo, filename: 'papa_roach_singles_photo')

    # --------------- Santana's Greatest Hits :: SANTANA ---------------
    santanas_greatest_hits = Album.create!(
        artist_id: santana.id, 
        title: "Santana's Greatest Hits", 
        year: 1974, 
        genre: "Rock-n-roll"
    )
    santanas_greatest_hits_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/SantanaGreatestHits_album_cover.jpg')
    santanas_greatest_hits.album_photo.attach(io: santanas_greatest_hits_photo, filename: 'santanas_greatest_hits_photo')

    # --------------- Supernatural :: SANTANA ---------------
    supernatural = Album.create!(
        artist_id: santana.id, 
        title: "Supernatural", 
        year: 1999, 
        genre: "Rock-n-roll"
    )
    supernatural_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/santana_supernatural_album_cover.jpeg')
    supernatural.album_photo.attach(io: supernatural_photo, filename: 'supernatural_photo')

    # --------------- ** SINGLES ** :: SANTANA ---------------
    santana_singles = Album.create!(
        artist_id: santana.id, 
        title: "Santana Singles", 
        year: 2002, 
        genre: "Rock-n-roll"
    )
    santana_singles_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/album_photos/singles.jpg')
    santana_singles.album_photo.attach(io: santana_singles_photo, filename: 'santana_singles_photo')

    # --------------- Steve Miller Band Greatest Hits :: STEVE MILLER BAND ---------------
    steve_miller_band_greatest_hits = Album.create!(
        artist_id: steve_miller_band.id, 
        title: "Steve Miller Band Greatest Hits", 
        year: 1978, 
        genre: "Rock-n-roll"
    )
    steve_miller_band_greatest_hits_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/steve_miller_band_greatest_hits_album.jpeg')
    steve_miller_band_greatest_hits.album_photo.attach(io: steve_miller_band_greatest_hits_photo, filename: 'steve_miller_band_greatest_hits_photo')

    # --------------- The Best of the Grateful Dead :: THE GRATEFUL DEAD ---------------
    best_of_the_grateful_dead = Album.create!(
        artist_id: grateful_dead.id, 
        title: "The Best of the Grateful Dead", 
        year: 2014, 
        genre: "Rock-n-roll"
    )
    best_of_the_grateful_dead_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/grateful_dead_best_of_album.jpg')
    best_of_the_grateful_dead.album_photo.attach(io: best_of_the_grateful_dead_photo, filename: 'best_of_the_grateful_dead_photo')

    # --------------- Grateful Dead [Skull & Roses] :: THE GRATEFUL DEAD ---------------
    grateful_dead_album = Album.create!(
        artist_id: grateful_dead.id, 
        title: "Grateful Dead [Skull & Roses]", 
        year: 1971, 
        genre: "Rock-n-roll"
    )
    grateful_dead_album_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/album_photos/grateful_dead_album.jpeg')
    grateful_dead_album.album_photo.attach(io: grateful_dead_album_photo, filename: 'grateful_dead_album_photo')


    # TODO: TODO: TODO: TODO: TODO: 
    # Completed: 
    # Counting Crows, Creedance Clearwater Revival, Green Day, Journey,
    # Keak da Sneak, MC Hammer, Michael Franti, Metallica, Papa Roach, Santana,
    # Steve Miller Band,  

    # Pending:  
    # Sally S Baby, The Grateful Dead, Third Eye Blind, 
    # Too $hort, Van Morrison, Van Wave

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
    
    white_gurl = Track.create!(
        album_id: my_ghetto_report_card.id,
        title: "White Gurl",
        track_length: 263
    )
    white_gurl_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/11+White+Gurl.mp3')
    white_gurl.track.attach(io: white_gurl_track, filename: "white_gurl") 
    
    muscle_cars = Track.create!(
        album_id: my_ghetto_report_card.id,
        title: "Muscle Cars",
        track_length: 242
    )
    muscle_cars_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/03+Muscle+Cars.mp3')
    muscle_cars.track.attach(io: muscle_cars_track, filename: "muscle_cars") 
    
    u_and_dat = Track.create!(
        album_id: my_ghetto_report_card.id,
        title: "U and Dat (feat. T-Pain & Kandi Girl)",
        track_length: 202
    )
    u_and_dat_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/13+U+and+Dat.mp3')
    u_and_dat.track.attach(io: u_and_dat_track, filename: "u_and_dat") 
    
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
    
    captain_save_a_hoe = Track.create!(
        album_id: e_40_singles.id,
        title: "Captain Save a Hoe",
        track_length: 288
    )
    captain_save_a_hoe_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/Captain+Save+a+Hoe.mp3')
    captain_save_a_hoe.track.attach(io: captain_save_a_hoe_track, filename: "captain_save_a_hoe")   
    
    # --------------- RONALD DREGAN: DREAGANOMICS TRACKS :: MAC DRE ---------------
    feelin_myself = Track.create!(
        album_id: ronald_dregan.id,
        title: "Feelin Myself",
        track_length: 225
    )
    feelin_myself_track = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/tracks/Feelin_Myself.mp3')
    feelin_myself.track.attach(io: feelin_myself_track, filename: "Feelin_Myself")
    
    since_84 = Track.create!(
        album_id: ronald_dregan.id,
        title: "Since '84",
        track_length: 250
    )
    since_84_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/07+Since+\'84.mp3')
    since_84.track.attach(io: since_84_track, filename: "since_84")
    
    get_stupid = Track.create!(
        album_id: ronald_dregan.id,
        title: "Get Stupid",
        track_length: 242
    )
    get_stupid_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/get_stupid.mp3')
    get_stupid.track.attach(io: get_stupid_track, filename: "get_stupid")

    # --------------- Stupid Doo Doo Dumb :: MAC DRE ---------------
    stupid_doo_doo_dumb_song = Track.create!(
        album_id: stupid_doo_doo_dumb_album.id,
        title: "Stupid Doo Doo Dumb (feat. Mac Mall & Miami)",
        track_length: 321
    )
    stupid_doo_doo_dumb_song_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/05+Stupid+Doo+Doo+Dumb.m4a')
    stupid_doo_doo_dumb_song.track.attach(io: stupid_doo_doo_dumb_song_track, filename: "stupid_doo_doo_dumb_song")
    
    lifes_a_bitch = Track.create!(
        album_id: stupid_doo_doo_dumb_album.id,
        title: "Life's A B****",
        track_length: 377
    )
    lifes_a_bitch_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/02+Life\'s+A+Bitch.m4a')
    lifes_a_bitch.track.attach(io: lifes_a_bitch_track, filename: "lifes_a_bitch")
    
    i_need_an_eighth = Track.create!(
        album_id: stupid_doo_doo_dumb_album.id,
        title: "I Need an Eighth (feat. Miami, Rott Wilder, Dubee, Dope Dogg & Resse)",
        track_length: 228
    )
    i_need_an_eighth_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/14+I+Need+A+Eight.m4a')
    i_need_an_eighth.track.attach(io: i_need_an_eighth_track, filename: "i_need_an_eighth")

    # --------------- Thizzle Washington :: MAC DRE ---------------
    thizzle_dance = Track.create!(
        album_id: thizzle_washington.id,
        title: "Thizzle Dance (feat. Chuck Beez)",
        track_length: 244
    )
    thizzle_dance_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/12+Thizzelle+Dance+(ft+Chuck+Beez).mp3')
    thizzle_dance.track.attach(io: thizzle_dance_track, filename: "thizzle_dance")
    
    boss_tycoon = Track.create!(
        album_id: thizzle_washington.id,
        title: "Boss Tycoon (feat. Yukmouth)",
        track_length: 252
    )
    boss_tycoon_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/Boss+Tycoon+(ft.+Yukmouth).mp3')
    boss_tycoon.track.attach(io: boss_tycoon_track, filename: "boss_tycoon")

    # --------------- ** SINGLES ** :: MAC DRE ---------------
    sizzlin = Track.create!(
        album_id: mac_dre_singles.id,
        title: "Sizzlin' (feat. Keak da Sneak)",
        track_length: 262
    )
    sizzlin_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/Sizzlin+(ft.+Keak+Da+Sneak).mp3')
    sizzlin.track.attach(io: sizzlin_track, filename: "sizzlin")
    
    andre_and_andre = Track.create!(
        album_id: mac_dre_singles.id,
        title: "Andre N Andre",
        track_length: 230
    )
    andre_and_andre_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/The+Andre\'s+(ft.+Andre+Nickatina).mp3')
    andre_and_andre.track.attach(io: andre_and_andre_track, filename: "andre_and_andre")
    
    welcome_to_the_bay = Track.create!(
        album_id: mac_dre_singles.id,
        title: "Welcome to the Bay (feat. Luniz & Messy Marv)",
        track_length: 274
    )
    welcome_to_the_bay_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mac_dre/welcome+to+the+bay+(ft+luniz+mac+dre+messy+marv+).mp3')
    welcome_to_the_bay.track.attach(io: welcome_to_the_bay_track, filename: "welcome_to_the_bay")
    
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

    july_4th = Track.create!(
        album_id: hells_kitchen.id,
        title: "July the 4th",
        track_length: 241
    )
    july_4th_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/11+July+the+4th.m4a')
    july_4th.track.attach(io: july_4th_track, filename: "july_4th") 

    he_said_she_said = Track.create!(
        album_id: hells_kitchen.id,
        title: "He Said, She Said...",
        track_length: 257
    )
    he_said_she_said_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/13+He+Said%2C+She+Said.m4a')
    he_said_she_said.track.attach(io: he_said_she_said_track, filename: "he_said_she_said") 
    
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

    # --------------- ** SINGLES ** :: ANDRE NICKATINA ---------------
    killa_whale = Track.create!(
        album_id: nickatina_singles.id,
        title: "Kila Whale",
        track_length: 276
    )
    killa_whale_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/05+Kila+Whale.mp3')
    killa_whale.track.attach(io: killa_whale_track, filename: "killa_whale") 

    honeycomb = Track.create!(
        album_id: nickatina_singles.id,
        title: "Honeycomb",
        track_length: 299
    )
    honeycomb_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/14+Honeycomb.mp3')
    honeycomb.track.attach(io: honeycomb_track, filename: "honeycomb") 
    
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

    # --------------- SOMEWHERE UNDER WONDERLAND :: COUNTING CROWS ---------------
    earthquake_driver = Track.create!(
        album_id: somewhere_under_wonderland.id,
        title: "Earthquake Driver",
        track_length: 211
    )
    earthquake_driver_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/Earthquake+Driver.mp3')
    earthquake_driver.track.attach(io: earthquake_driver_track, filename: "earthquake_driver")

    # --------------- FILMS ABOUT GHOSTS :: COUNTING CROWS ---------------
    accidentally_in_love = Track.create!(
        album_id: films_about_ghosts.id,
        title: "Accidentally In Love",
        track_length: 188
    )
    accidentally_in_love_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/01+Accidentally+in+Love.mp3')
    accidentally_in_love.track.attach(io: accidentally_in_love_track, filename: "accidentally_in_love")

    mr_jones = Track.create!(
        album_id: films_about_ghosts.id,
        title: "Mr. Jones",
        track_length: 272
    )
    mr_jones_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/Mr.+Jones.mp3')
    mr_jones.track.attach(io: mr_jones_track, filename: "mr_jones")

    # --------------- AMERICAN IDIOT :: GREEN DAY ---------------
    american_idiot_song = Track.create!(
        album_id: american_idiot.id,
        title: "American Idiot",
        track_length: 174
    )
    american_idiot_song_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/01+American+Idiot.m4a')
    american_idiot_song.track.attach(io: american_idiot_song_track, filename: "american_idiot_song")

    jesus_of_suburbia = Track.create!(
        album_id: american_idiot.id,
        title: "Jesus of Suburbia",
        track_length: 548
    )
    jesus_of_suburbia_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/02+Jesus+Of+Suburbia.m4a')
    jesus_of_suburbia.track.attach(io: jesus_of_suburbia_track, filename: "jesus_of_suburbia")

    holiday = Track.create!(
        album_id: american_idiot.id,
        title: "Holiday",
        track_length: 232
    )
    holiday_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/03+Holiday.m4a')
    holiday.track.attach(io: holiday_track, filename: "holiday")

    boulevard_of_broken_dreams = Track.create!(
        album_id: american_idiot.id,
        title: "Boulevard of Broken Dreams",
        track_length: 260
    )
    boulevard_of_broken_dreams_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/04+Boulevard+Of+Broken+Dreams.m4a')
    boulevard_of_broken_dreams.track.attach(io: boulevard_of_broken_dreams_track, filename: "boulevard_of_broken_dreams")

    wake_me_up_when_sept_ends = Track.create!(
        album_id: american_idiot.id,
        title: "Wake Me Up When September Ends",
        track_length: 285
    )
    wake_me_up_when_sept_ends_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/11+Wake+Me+Up+When+September+Ends.m4a')
    wake_me_up_when_sept_ends.track.attach(io: wake_me_up_when_sept_ends_track, filename: "wake_me_up_when_sept_ends")

    # --------------- Greatest Hits: God's Favorite Band :: GREEN DAY --------------- 
    brain_stew = Track.create!(
        album_id: green_day_greatest_hits.id,
        title: "Brain Stew",
        track_length: 193
    )
    brain_stew_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/10+Brainstew.mp3')
    brain_stew.track.attach(io: brain_stew_track, filename: "brain_stew")

    twenty_one_guns = Track.create!(
        album_id: green_day_greatest_hits.id,
        title: "21 Guns",
        track_length: 322
    )
    twenty_one_guns_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/16+21+Guns.mp3')
    twenty_one_guns.track.attach(io: twenty_one_guns_track, filename: "twenty_one_guns")
    
    # --------------- Warning :: GREEN DAY ---------------
    minority = Track.create!(
        album_id: warning_album.id,
        title: "Minority",
        track_length: 168
    )
    minority_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/18+Minority.mp3')
    minority.track.attach(io: minority_track, filename: "minority")

    warning = Track.create!(
        album_id: warning_album.id,
        title: "Warning",
        track_length: 221
    )
    warning_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/19+Warning.mp3')
    warning.track.attach(io: warning_track, filename: "warning")

    waiting = Track.create!(
        album_id: warning_album.id,
        title: "Waiting",
        track_length: 192
    )
    waiting_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/20+Waiting.mp3')
    waiting.track.attach(io: waiting_track, filename: "waiting")

    macys_day_parade = Track.create!(
        album_id: warning_album.id,
        title: "Macy's Day Parade",
        track_length: 213
    )
    macys_day_parade_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/21+Macy\'s+Day+Parade.mp3')
    macys_day_parade.track.attach(io: macys_day_parade_track, filename: "macys_day_parade")
    
    # --------------- Dookie :: GREEN DAY ---------------
    welcome_to_paradise = Track.create!(
        album_id: dookie_album.id,
        title: "Welcome to Paradise",
        track_length: 224
    )
    welcome_to_paradise_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/04+Welcome+to+Paradise.mp3')
    welcome_to_paradise.track.attach(io: welcome_to_paradise_track, filename: "welcome_to_paradise")

    basket_case = Track.create!(
        album_id: dookie_album.id,
        title: "Basket Case",
        track_length: 181
    )
    basket_case_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/Basket+Case.mp3')
    basket_case.track.attach(io: basket_case_track, filename: "basket_case")

    when_i_come_around = Track.create!(
        album_id: dookie_album.id,
        title: "When I Come Around",
        track_length: 178
    )
    when_i_come_around_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/06+When+I+Come+Around.mp3')
    when_i_come_around.track.attach(io: when_i_come_around_track, filename: "when_i_come_around")
    
    # --------------- Nimrod :: GREEN DAY --------------- 
    good_riddance = Track.create!(
        album_id: nimrod_album.id,
        title: "Good Riddance (Time of Your Life)",
        track_length: 153
    )
    good_riddance_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/15+Good+Riddance+(Time+of+Your+Life).mp3')
    good_riddance.track.attach(io: good_riddance_track, filename: "good_riddance")

    nice_guys_finish_last = Track.create!(
        album_id: nimrod_album.id,
        title: "Nice Guys Finish Last",
        track_length: 168
    )
    nice_guys_finish_last_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/green_day/17+Nice+Guys+Finish+Last.mp3')
    nice_guys_finish_last.track.attach(io: nice_guys_finish_last_track, filename: "nice_guys_finish_last")

    # --------------- Greatest Hits :: JOURNEY ---------------
    dont_stop_believin = Track.create!(
        album_id: journey_greatest_hits.id,
        title: "Don't Stop Believin'",
        track_length: 249
    )
    dont_stop_believin_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/journey/1-02+Don\'t+Stop+Believin\'.m4a')
    dont_stop_believin.track.attach(io: dont_stop_believin_track, filename: "dont_stop_believin")

    faithfully = Track.create!(
        album_id: journey_greatest_hits.id,
        title: "Faithfully",
        track_length: 266
    )
    faithfully_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/journey/04+Faithfully.mp3')
    faithfully.track.attach(io: faithfully_track, filename: "faithfully")

    any_way_you_want_it = Track.create!(
        album_id: journey_greatest_hits.id,
        title: "Any Way You Want It",
        track_length: 202
    )
    any_way_you_want_it_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/journey/1-05+Any+Way+You+Want+It.m4a')
    any_way_you_want_it.track.attach(io: any_way_you_want_it_track, filename: "any_way_you_want_it")

    lights = Track.create!(
        album_id: journey_greatest_hits.id,
        title: "Lights",
        track_length: 190
    )
    lights_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/journey/10+Lights.m4a')
    lights.track.attach(io: lights_track, filename: "lights")

    separate_ways_worlds_apart = Track.create!(
        album_id: journey_greatest_hits.id,
        title: "Separate Ways (Worlds Apart)",
        track_length: 325
    )
    separate_ways_worlds_apart_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/journey/Separate+Ways+(Worlds+Apart).mp3')
    separate_ways_worlds_apart.track.attach(io: separate_ways_worlds_apart_track, filename: "separate_ways_worlds_apart")

    # --------------- Town Business :: KEAK DA SNEAK ---------------
    town_business_song = Track.create!(
        album_id: town_business_album.id,
        title: "Town Business",
        track_length: 274
    )
    town_business_song_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/keak_da_sneak/07+Town+Business.mp3')
    town_business_song.track.attach(io: town_business_song_track, filename: "town_business_song")
    
    tshirt_blue_jeans_nikes = Track.create!(
        album_id: town_business_album.id,
        title: "T Shirt, Blue Jeans & Nikes Pt. 2",
        track_length: 196
    )
    tshirt_blue_jeans_nikes_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/keak_da_sneak/02+White+T-shirt+blue+jeans+and+nikes.mp3')
    tshirt_blue_jeans_nikes.track.attach(io: tshirt_blue_jeans_nikes_track, filename: "tshirt_blue_jeans_nikes")

    # --------------- Deified :: KEAK DA SNEAK ---------------
    that_go = Track.create!(
        album_id: deified_album.id,
        title: "That Go (feat. Prodigy & Alchemist)",
        track_length: 220
    )
    that_go_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/keak_da_sneak/That+Go.mp3')
    that_go.track.attach(io: that_go_track, filename: "that_go")
    
    super_hyphy = Track.create!(
        album_id: deified_album.id,
        title: "Super Hyphy",
        track_length: 204
    )
    super_hyphy_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/keak_da_sneak/That+Go.mp3')
    super_hyphy.track.attach(io: super_hyphy_track, filename: "super_hyphy")

    # --------------- ** SINGLES ** :: KEAK DA SNEAK ---------------
    im_from_the_bay = Track.create!(
        album_id: keak_da_sneak_singles.id,
        title: "I'm From the Bay (feat. Goapele)",
        track_length: 194
    )
    im_from_the_bay_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/keak_da_sneak/I\'m+From+The+Bay+(ft.+Goapele).mp3')
    im_from_the_bay.track.attach(io: im_from_the_bay_track, filename: "im_from_the_bay")

    # --------------- ** SINGLES ** :: LUNIZ ---------------
    i_got_five_on_it = Track.create!(
        album_id: luniz_singles.id,
        title: "I Got Five On It (Remix) (feat. E-40, Mike Marshall, & Shock G)",
        track_length: 254
    )
    i_got_five_on_it_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/luniz/The+Luniz+I+Got+Five+On+It+(Remix).mp3')
    i_got_five_on_it.track.attach(io: i_got_five_on_it_track, filename: "i_got_five_on_it")

    # --------------- ** SINGLES ** :: MC HAMMER ---------------
    pop_your_collar = Track.create!(
        album_id: mc_hammer_singles.id,
        title: "Pop Your Collar (feat. Wee Wee)",
        track_length: 214
    )
    pop_your_collar_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mc_hammer/Pop+Your+Collar.mp3')
    pop_your_collar.track.attach(io: pop_your_collar_track, filename: "pop_your_collar")
    
    too_legit_to_quit = Track.create!(
        album_id: mc_hammer_singles.id,
        title: "2 Legit 2 Quit",
        track_length: 333
    )
    too_legit_to_quit_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mc_hammer/Too+Legit+To+Quit.mp3')
    too_legit_to_quit.track.attach(io: too_legit_to_quit_track, filename: "too_legit_to_quit")
    
    u_cant_touch_this = Track.create!(
        album_id: mc_hammer_singles.id,
        title: "U Can't Touch This",
        track_length: 257
    )
    u_cant_touch_this_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/mc_hammer/U+Can\'t+Touch+This.mp3')
    u_cant_touch_this.track.attach(io: u_cant_touch_this_track, filename: "u_cant_touch_this")

    # --------------- Metallica :: Metallica ---------------
    enter_sandman = Track.create!(
        album_id: metallica_album.id,
        title: "Enter Sandman",
        track_length: 331
    )
    enter_sandman_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/metallica/01+Enter+Sandman.m4a')
    enter_sandman.track.attach(io: enter_sandman_track, filename: "enter_sandman")

    # --------------- Master of Puppets :: Metallica ---------------
    master_of_puppets_track = Track.create!(
        album_id: master_of_puppets.id,
        title: "Master of Puppets",
        track_length: 515
    )
    master_of_puppets_track_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/metallica/02+Master+Of+Puppets.m4a')
    master_of_puppets_track.track.attach(io: master_of_puppets_track_track, filename: "master_of_puppets_track")

    # --------------- Reload :: Metallica ---------------
    fuel = Track.create!(
        album_id: reload_album.id,
        title: "Fuel",
        track_length: 269
    )
    fuel_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/metallica/01+Fuel.mp3')
    fuel.track.attach(io: fuel_track, filename: "fuel")

    # --------------- ** SINGLES ** :: Metallica ---------------
    i_disappear = Track.create!(
        album_id: metallica_singles.id,
        title: "I Disappear",
        track_length: 266
    )
    i_disappear_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/metallica/02+I+Disappear.m4a')
    i_disappear.track.attach(io: i_disappear_track, filename: "i_disappear")

    # --------------- EVERYONE DESERVES MUSIC :: MICHAEL FRANTI & SPEARHEAD ---------------
    what_i_be = Track.create!(
        album_id: everyone_deserves_music.id,
        title: "What I Be",
        track_length: 285
    )
    what_i_be_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/01+What+I+Be.mp3')
    what_i_be.track.attach(io: what_i_be_track, filename: "what_i_be")
    
    feelin_free = Track.create!(
        album_id: everyone_deserves_music.id,
        title: "Feelin' Free",
        track_length: 234
    )
    feelin_free_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/09+Feelin\'+Free.mp3')
    feelin_free.track.attach(io: feelin_free_track, filename: "feelin_free")
    
    crazy_crazy_crazy = Track.create!(
        album_id: everyone_deserves_music.id,
        title: "Crazy, Crazy, Crazy",
        track_length: 208
    )
    crazy_crazy_crazy_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/12+Crazy.+Crazy.+Crazy..mp3')
    crazy_crazy_crazy.track.attach(io: crazy_crazy_crazy_track, filename: "crazy_crazy_crazy")

    # --------------- STAY HUMAN :: MICHAEL FRANTI & SPEARHEAD ---------------
    rock_the_nation = Track.create!(
        album_id: stay_human.id,
        title: "Rock The Nation",
        track_length: 266
    )
    rock_the_nation_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/05+Rock+The+Nation.mp3')
    rock_the_nation.track.attach(io: rock_the_nation_track, filename: "rock_the_nation")
    
    soulshine = Track.create!(
        album_id: stay_human.id,
        title: "Soulshine",
        track_length: 241
    )
    soulshine_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/10+Soulshine.mp3')
    soulshine.track.attach(io: soulshine_track, filename: "soulshine")
    
    sometimes = Track.create!(
        album_id: stay_human.id,
        title: "Sometimes",
        track_length: 245
    )
    sometimes_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/Sometimes.mp3')
    sometimes.track.attach(io: sometimes_track, filename: "sometimes")
    
    stay_human_all_the_freaky_people = Track.create!(
        album_id: stay_human.id,
        title: "Stay Human (All The Freaky People)",
        track_length: 266
    )
    stay_human_all_the_freaky_people_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/Stay+Human+(All+The+Freaky+People).mp3')
    stay_human_all_the_freaky_people.track.attach(io: stay_human_all_the_freaky_people_track, filename: "stay_human_all_the_freaky_people")

    # --------------- ** SINGLES ** :: MICHAEL FRANTI & SPEARHEAD ---------------
    say_hey_i_love_you = Track.create!(
        album_id: michael_franti_singles.id,
        title: "Say Hey (I Love You)",
        track_length: 236
    )
    say_hey_i_love_you_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/06+Say+Hey+(I+Love+You).mp3')
    say_hey_i_love_you.track.attach(io: say_hey_i_love_you_track, filename: "say_hey_i_love_you")
    
    ganja_baby = Track.create!(
        album_id: michael_franti_singles.id,
        title: "Ganja Baby",
        track_length: 260
    )
    ganja_baby_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/10+Ganja+Baby.m4a')
    ganja_baby.track.attach(io: ganja_baby_track, filename: "ganja_baby")
    
    hello_bonjour = Track.create!(
        album_id: michael_franti_singles.id,
        title: "Hello Bonjour",
        track_length: 290
    )
    hello_bonjour_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/Hello+Bonjour.mp3')
    hello_bonjour.track.attach(io: hello_bonjour_track, filename: "hello_bonjour")
    
    oh_my_god = Track.create!(
        album_id: michael_franti_singles.id,
        title: "Oh My God",
        track_length: 317
    )
    oh_my_god_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/Oh+My+God.mp3')
    oh_my_god.track.attach(io: oh_my_god_track, filename: "oh_my_god")
    
    sound_of_sunshine = Track.create!(
        album_id: michael_franti_singles.id,
        title: "The Sound of Sunshine",
        track_length: 225
    )
    sound_of_sunshine_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/The+Sound+of+Sunshine.mp3')
    sound_of_sunshine.track.attach(io: sound_of_sunshine_track, filename: "sound_of_sunshine")
    
    what_i_got_sublime_tribute = Track.create!(
        album_id: michael_franti_singles.id,
        title: "What I Got (Sublime Tribute)",
        track_length: 203
    )
    what_i_got_sublime_tribute_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/michael_franti/What+I+got+(sublime+tribute+album).mp3')
    what_i_got_sublime_tribute.track.attach(io: what_i_got_sublime_tribute_track, filename: "what_i_got_sublime_tribute")

    # --------------- Infest :: PAPA ROACH ---------------
    last_resort = Track.create!(
        album_id: infest_album.id,
        title: "Last Resort",
        track_length: 199
    )
    last_resort_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/papa_roach/infest/02+Last+Resort.m4a')
    last_resort.track.attach(io: last_resort_track, filename: "last_resort")
    
    broken_home = Track.create!(
        album_id: infest_album.id,
        title: "Broken Home",
        track_length: 221
    )
    broken_home_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/papa_roach/infest/03+Broken+Home.m4a')
    broken_home.track.attach(io: broken_home_track, filename: "broken_home")

    between_angels_and_insects = Track.create!(
        album_id: infest_album.id,
        title: "Between Angels and Insects",
        track_length: 234
    )
    between_angels_and_insects_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/papa_roach/infest/05+Between+Angels+And+Insects.m4a')
    between_angels_and_insects.track.attach(io: between_angels_and_insects_track, filename: "between_angels_and_insects")

    blood_brothers = Track.create!(
        album_id: infest_album.id,
        title: "Blood Brothers",
        track_length: 213
    )
    blood_brothers_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/papa_roach/infest/06+Blood+Brothers.m4a')
    blood_brothers.track.attach(io: blood_brothers_track, filename: "blood_brothers")

    # --------------- ** SINGLES ** :: PAPA ROACH ---------------
    scars = Track.create!(
        album_id: papa_roach_singles.id,
        title: "Scars",
        track_length: 208
    )
    scars_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/papa_roach/Scars.mp3')
    scars.track.attach(io: scars_track, filename: "scars")

    # --------------- Santana's Greatest Hits :: SANTANA ---------------
    oye_como_va = Track.create!(
        album_id: santanas_greatest_hits.id,
        title: "Oye Como Va",
        track_length: 258
    )
    oye_como_va_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/santana/santanas_greatest_hits/1-05+Oye+Como+Va.m4a')
    oye_como_va.track.attach(io: oye_como_va_track, filename: "oye_como_va")

    black_magic_woman = Track.create!(
        album_id: santanas_greatest_hits.id,
        title: "Black Magic Woman",
        track_length: 334
    )
    black_magic_woman_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/santana/santanas_greatest_hits/santana-+black+magic+woman.mp3')
    black_magic_woman.track.attach(io: black_magic_woman_track, filename: "black_magic_woman")

    # --------------- Supernatural :: SANTANA ---------------
    put_your_lights_on = Track.create!(
        album_id: supernatural.id,
        title: "Put Your Lights On (feat. Everlast)",
        track_length: 285
    )
    put_your_lights_on_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/santana/supernatural/03+Put+Your+Lights+On.m4a')
    put_your_lights_on.track.attach(io: put_your_lights_on_track, filename: "put_your_lights_on")

    smooth = Track.create!(
        album_id: supernatural.id,
        title: "Smooth (feat. Rob Thomas)",
        track_length: 298
    )
    smooth_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/santana/supernatural/05+Smooth.m4a')
    smooth.track.attach(io: smooth_track, filename: "smooth")

    maria_maria = Track.create!(
        album_id: supernatural.id,
        title: "Maria Maria (feat. Sincere and Money Harm)",
        track_length: 263
    )
    maria_maria_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/santana/supernatural/07+Maria+Maria.m4a')
    maria_maria.track.attach(io: maria_maria_track, filename: "maria_maria")

    # --------------- ** SINGLES ** :: SANTANA ---------------
    why_dont_you_and_i = Track.create!(
        album_id: santana_singles.id,
        title: "Why Don't You & I (feat. Chad Kroeger)",
        track_length: 274
    )
    why_dont_you_and_i_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/santana/11+Why+Don\'t+You+%26+I.mp3')
    why_dont_you_and_i.track.attach(io: why_dont_you_and_i_track, filename: "why_dont_you_and_i")

    # --------------- Steve Miller Band Greatest Hits :: STEVE MILLER BAND ---------------
    take_the_money_and_run = Track.create!(
        album_id: steve_miller_band_greatest_hits.id,
        title: "Take The Money And Run",
        track_length: 172
    )
    take_the_money_and_run_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/steve_miller_band/greatest_hits/01+Take+The+Money+And+Run.m4a')
    take_the_money_and_run.track.attach(io: take_the_money_and_run_track, filename: "take_the_money_and_run")
    
    the_joker = Track.create!(
        album_id: steve_miller_band_greatest_hits.id,
        title: "The Joker",
        track_length: 269
    )
    the_joker_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/steve_miller_band/greatest_hits/05+The+Joker.m4a')
    the_joker.track.attach(io: the_joker_track, filename: "the_joker")

    livin_in_the_USA = Track.create!(
        album_id: steve_miller_band_greatest_hits.id,
        title: "Livin' in the U.S.A.",
        track_length: 227
    )
    livin_in_the_USA_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/steve_miller_band/greatest_hits/06+Livin\'+In+The+U.S.A..m4a')
    livin_in_the_USA.track.attach(io: livin_in_the_USA_track, filename: "livin_in_the_USA")

    fly_like_an_eagle = Track.create!(
        album_id: steve_miller_band_greatest_hits.id,
        title: "Fly Like an Eagle",
        track_length: 246
    )
    fly_like_an_eagle_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/steve_miller_band/greatest_hits/08+Fly+Like+An+Eagle.m4a')
    fly_like_an_eagle.track.attach(io: fly_like_an_eagle_track, filename: "fly_like_an_eagle")

    jet_airliner = Track.create!(
        album_id: steve_miller_band_greatest_hits.id,
        title: "Jet Airliner",
        track_length: 270
    )
    jet_airliner_track = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/tracks/steve_miller_band/greatest_hits/10+Jet+Airliner.m4a')
    jet_airliner.track.attach(io: jet_airliner_track, filename: "jet_airliner")

    # TODO: TODO: TODO: TODO:

    # ------------------------------------------------------------------------- #
    # ---------------------------- PLAYLISTS ---------------------------------- #
    # ------------------------------------------------------------------------- #

    yay_area = Playlist.create!(
        curator_id: curry.id,
        title: "Yay Area"
    )
    yay_area_photo = open('https://s3-us-west-1.amazonaws.com/bayify-seeds/playlist_photos/yay_area.png')
    yay_area.playlist_photo.attach(io: yay_area_photo, filename: "Yay_Area_Playlist")

    hyphy = Playlist.create!(
        curator_id: bayify.id,
        title: "Hyphy"
    )
    hyphy_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/hyphy.jpeg')
    hyphy.playlist_photo.attach(io: hyphy_photo, filename: "hyphy_playlist")

    summer_of_love = Playlist.create!(
        curator_id: bayify.id,
        title: "Summer of Love"
    )
    summer_of_love_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/summer_of_love.jpg')
    summer_of_love.playlist_photo.attach(io: summer_of_love_photo, filename: "summer_of_love_playlist")

    bfd = Playlist.create!(
        curator_id: bayify.id,
        title: "BFD"
    )
    bfd_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/bfd.jpg')
    bfd.playlist_photo.attach(io: bfd_photo, filename: "bfd_Playlist")

    # ------------------ CHARTS ------------------
    todays_top_hits = Playlist.create!(
        curator_id: bayify.id,
        title: "Today's Top Hits"
    )
    todays_top_hits_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/todays_top_hits.jpeg')
    todays_top_hits.playlist_photo.attach(io: todays_top_hits_photo, filename: "todays_top_hits_Playlist")

    top_25 = Playlist.create!(
        curator_id: bayify.id,
        title: "Bay Area Top 25"
    )
    top_25_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/top_25_bay_area.jpeg')
    top_25.playlist_photo.attach(io: top_25_photo, filename: "top_25_Playlist")

    # ------------------ GENRES & MOODS ------------------
    chill = Playlist.create!(
        curator_id: bayify.id,
        title: "Chill"
    )
    chill_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/chill.jpg')
    chill.playlist_photo.attach(io: chill_photo, filename: "chill_Playlist")

    hip_hop = Playlist.create!(
        curator_id: bayify.id,
        title: "Hip-hop"
    )
    hip_hop_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/hip-hop.jpg')
    hip_hop.playlist_photo.attach(io: hip_hop_photo, filename: "hip_hop_Playlist")

    alternative = Playlist.create!(
        curator_id: bayify.id,
        title: "Alternative"
    )
    alternative_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/indie.jpeg')
    alternative.playlist_photo.attach(io: alternative_photo, filename: "alternative_Playlist")

    party = Playlist.create!(
        curator_id: bayify.id,
        title: "Party"
    )
    party_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/party.jpg')
    party.playlist_photo.attach(io: party_photo, filename: "party_Playlist")

    reggae = Playlist.create!(
        curator_id: bayify.id,
        title: "Reggae"
    )
    reggae_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/reggae.jpg')
    reggae.playlist_photo.attach(io: reggae_photo, filename: "reggae_Playlist")

    rock = Playlist.create!(
        curator_id: bayify.id,
        title: "Rock"
    )
    rock_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/rock.jpg')
    rock.playlist_photo.attach(io: rock_photo, filename: "rock_Playlist")

    summer = Playlist.create!(
        curator_id: bayify.id,
        title: "Summer"
    )
    summer_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/summer.jpeg')
    summer.playlist_photo.attach(io: summer_photo, filename: "summer_Playlist")

    workout = Playlist.create!(
        curator_id: bayify.id,
        title: "Workout"
    )
    workout_photo = open('https://bayify-seeds.s3-us-west-1.amazonaws.com/playlist_photos/workout.jpg')
    workout.playlist_photo.attach(io: workout_photo, filename: "workout_Playlist")

    # ------------------------------------------------------------------------- #
    # --------------------------- PLAYLIST TRACKS ----------------------------- #
    # ------------------------------------------------------------------------- #

    PlaylistTrack.create!(track_id: calm_down.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: random.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: feelin_myself.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: tell_me_when_to_go.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: all_star_chuck_taylors.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: ayo.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: choices_warriors.id, playlist_id: yay_area.id)
    PlaylistTrack.create!(track_id: nineteen_eighty.id, playlist_id: yay_area.id)

    PlaylistTrack.create!(track_id: feelin_myself.id, playlist_id: hyphy.id)
    PlaylistTrack.create!(track_id: tell_me_when_to_go.id, playlist_id: hyphy.id)
    PlaylistTrack.create!(track_id: calm_down.id, playlist_id: hyphy.id)
    PlaylistTrack.create!(track_id: white_gurl.id, playlist_id: hyphy.id)
    PlaylistTrack.create!(track_id: sprinkle_me.id, playlist_id: hyphy.id)
    PlaylistTrack.create!(track_id: muscle_cars.id, playlist_id: hyphy.id)
    PlaylistTrack.create!(track_id: captain_save_a_hoe.id, playlist_id: hyphy.id)
    PlaylistTrack.create!(track_id: my_cup.id, playlist_id: hyphy.id)

    PlaylistTrack.create!(track_id: fortunate_son.id, playlist_id: summer_of_love.id)
    PlaylistTrack.create!(track_id: down_on_the_corner.id, playlist_id: summer_of_love.id)

    PlaylistTrack.create!(track_id: when_i_come_around.id, playlist_id: bfd.id)
    PlaylistTrack.create!(track_id: nice_guys_finish_last.id, playlist_id: bfd.id)
    PlaylistTrack.create!(track_id: good_riddance.id, playlist_id: bfd.id)
    PlaylistTrack.create!(track_id: minority.id, playlist_id: bfd.id)
    PlaylistTrack.create!(track_id: macys_day_parade.id, playlist_id: bfd.id)

    PlaylistTrack.create!(track_id: me_myself_and_I.id, playlist_id: todays_top_hits.id)
    PlaylistTrack.create!(track_id: calm_down.id, playlist_id: todays_top_hits.id)
    PlaylistTrack.create!(track_id: the_plan.id, playlist_id: todays_top_hits.id)
    PlaylistTrack.create!(track_id: him_and_I.id, playlist_id: todays_top_hits.id)
    PlaylistTrack.create!(track_id: no_limit.id, playlist_id: todays_top_hits.id)

    PlaylistTrack.create!(track_id: him_and_I.id, playlist_id: top_25.id)
    PlaylistTrack.create!(track_id: no_limit.id, playlist_id: top_25.id)
    PlaylistTrack.create!(track_id: the_plan.id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: top_25.id)

    PlaylistTrack.create!(track_id: some_kind_of_drug.id, playlist_id: chill.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: chill.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: chill.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: chill.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: chill.id)

    # PlaylistTrack.create!(track_id:  .id, playlist_id: hip_hop.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: hip_hop.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: hip_hop.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: hip_hop.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: hip_hop.id)

    # PlaylistTrack.create!(track_id:  .id, playlist_id: alternative.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: alternative.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: alternative.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: alternative.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: alternative.id)

    # PlaylistTrack.create!(track_id:  .id, playlist_id: party.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: party.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: party.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: party.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: party.id)

    # PlaylistTrack.create!(track_id:  .id, playlist_id: reggae.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: reggae.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: reggae.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: reggae.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: reggae.id)

    # PlaylistTrack.create!(track_id:  .id, playlist_id: rock.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: rock.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: rock.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: rock.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: rock.id)

    # PlaylistTrack.create!(track_id:  .id, playlist_id: summer.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: summer.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: summer.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: summer.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: summer.id)

    # PlaylistTrack.create!(track_id:  .id, playlist_id: workout.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: workout.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: workout.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: workout.id)
    # PlaylistTrack.create!(track_id:  .id, playlist_id: workout.id)



    # ------------------------------------------------------------------------- #
    # ------------------------- PLAYLIST FOLLOWERS ---------------------------- #
    # ------------------------------------------------------------------------- #

    PlaylistFollower.create!(follower_id: curry.id, playlist_id: yay_area.id)
    PlaylistFollower.create!(follower_id: curry.id, playlist_id: hyphy.id)
    PlaylistFollower.create!(follower_id: curry.id, playlist_id: summer_of_love.id)

    # ------------------------------------------------------------------------- #
    # -------------------------- ARTIST FOLLOWERS ----------------------------- #
    # ------------------------------------------------------------------------- #

    ArtistFollower.create!(follower_id: curry.id, artist_id: e_40.id)
    ArtistFollower.create!(follower_id: curry.id, artist_id: g_eazy.id)
    ArtistFollower.create!(follower_id: curry.id, artist_id: mac_dre.id)
    ArtistFollower.create!(follower_id: curry.id, artist_id: too_short.id)

    # ------------------------------------------------------------------------- #
    # --------------------------- ALBUM FOLLOWERS ----------------------------- #
    # ------------------------------------------------------------------------- #

    AlbumFollower.create!(follower_id: curry.id, album_id: my_ghetto_report_card.id)
    AlbumFollower.create!(follower_id: curry.id, album_id: when_its_dark_out.id)
    AlbumFollower.create!(follower_id: curry.id, album_id: beautiful_and_damned_album.id)
    AlbumFollower.create!(follower_id: curry.id, album_id: ronald_dregan.id)
    AlbumFollower.create!(follower_id: curry.id, album_id: e_40_singles.id)

    # ------------------------------------------------------------------------- #
    # --------------------------- TRACK FOLLOWERS ----------------------------- #
    # ------------------------------------------------------------------------- #

    TrackFollower.create!(follower_id: curry.id, track_id: tell_me_when_to_go.id)
    TrackFollower.create!(follower_id: curry.id, track_id: calm_down.id)
    TrackFollower.create!(follower_id: curry.id, track_id: of_all_things.id)
    TrackFollower.create!(follower_id: curry.id, track_id: thats_a_lot.id)
    TrackFollower.create!(follower_id: curry.id, track_id: the_plan.id)
    TrackFollower.create!(follower_id: curry.id, track_id: choices_warriors.id)
    TrackFollower.create!(follower_id: curry.id, track_id: sprinkle_me.id)
    TrackFollower.create!(follower_id: curry.id, track_id: captain_save_a_hoe.id)
    TrackFollower.create!(follower_id: curry.id, track_id: my_cup.id)
    TrackFollower.create!(follower_id: curry.id, track_id: all_star_chuck_taylors.id)
    TrackFollower.create!(follower_id: curry.id, track_id: he_said_she_said.id)
    TrackFollower.create!(follower_id: curry.id, track_id: killa_whale.id)
    TrackFollower.create!(follower_id: curry.id, track_id: jungle.id)

end