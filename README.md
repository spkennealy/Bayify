# BAYIFY

This is a clone of Spotify's web player, with a bay area spin. Here you can find all of your favorite and legendary bay area musicians. It uses a PostgreSQL database, Ruby backend, and a React/Redux frontend.

This project was built over a 10 day time period. More improvements to come! Below is a screen shot of the albums index page in the web player, once a user has logged in.

![alt text](https://s3-us-west-1.amazonaws.com/bayify-seeds/readme/library_album_index.png "Library Album Index Page")

## FEATURES

* Secure user authentication with BCrypt
* Full library page with playlists, songs, albums, and artists (as well as all show pages)
* Users can create and delete playlists
* Users can add songs to playlist from any page with songs listed
* Web player controls have play, pause, skip to next track, go back to previous track, and volume controls.
* Users can search site while song is playing

### CREATING & DELETING PLAYLISTS

Users have access to a `new playlist` button throughout the libray section. This button reveals an adaptive modal. When this button is clicked, it opens the new playlist modal that gives the user a form to create a new playlist. As stated, the modal is adaptive and is also used to display a delete playlist modal and an add playlist track modal. 

This adaptive modal was built by passing in a `modalType` when opening the modal component. Using a switch, the modal component would then render the matching subcomponent.

```javascript

    let component;
    switch (props.modal.modalType) {
        case "createPlaylist":
            component = <NewPlaylistModal />;
            break;
        case "addPlaylistTrack":
            component = <AddPlaylistTrackModal />;
            break;
        case "deletePlaylist":
            component = <DeletePlaylistModal 
                playlistId={props.modal.playlistId}
                pushHistory={props.pushHistory}/>;
            break;
        default:
            return null;
    }

```

With many ways to accomplish this desired outcome, I believe that this solution kept the code more readable and cleaner.

![](https://github.com/spkennealy/Bayify/blob/master/app/assets/images/create_playlist.gif)

### MUSIC PLAYER

One of the more challenging features of this project was the music player. Utilizing the html `audio` tag, the player was built with custom controls and a progress bar. The progress bar uses a custom javascript function and css to change the color of the bar as the song progresses. The html progess bar `div` has a `span` nested inside, which contains the green color that expands with the track progression. 

```javascript

moveProgressBar() {
      const progress = document.getElementById("progress");
      let width = 0;
      if (this.audioPlayer.currentTime > 0) {
          width = Math.floor((100 / this.audioPlayer.duration) * this.audioPlayer.currentTime); 
      }
      progress.style.width = width + "%";
  }

```

Initially, I considered using an html `input` tag with type `range`, but I felt that using a nested `span` and this `moveProgressBar` function was cleaner.

![](https://s3-us-west-1.amazonaws.com/bayify-seeds/readme/music_player.png)

### PROJECT DESIGN

Bayify was designed to mimic spotify's web based player. The goal was to get the main features of Spotify cloned (ie, continuous play throughout site, playlist CRUD). While designing the database and the backend, some parts of the future features below were kept in mind. Therefore there are additional tables, models, and controllers ready for when those features are implemented.

### TECHNOLOGIES

Ruby on Rails was chosen for the backend and PostgresSQL for the database management. Rails was chosen because of it's support for relational databases. As this project was small in scale and subject to a short time frame, convenience and speed was prioritized over scalability. 

React was chosen for the frontend due to it's efficieny. The React design allows for a single page application that will update and render just the right components when the data changes. The Redux cycle allows for a flat state and the project was built with that normalized state in mind. The are separate reducers and actions for tracks, albums, playlists, artists, etc.

### FUTURE FEATURES
* Repeat track, repeat playlist/album/artist, shuffle
* Side bar with dynamic recently played based on user
* Additional tracks/artists/albums/playlists
