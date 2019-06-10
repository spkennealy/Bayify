import React from 'react';
import { 
    FaPlay, FaPauseCircle, FaStepBackward, FaStepForward, FaRandom,
    FaVolumeUp, FaVolumeDown, FaVolumeMute, FaVolumeOff
} from 'react-icons/fa';
import { MdRepeat, MdRepeatOne } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: 1,
            trackLength: 0,
            currentTime: 0,
            muted: false,
            currentArtist: null,
            currentPhoto: ""
        };

        this.updateTime = this.updateTime.bind(this);
        this.trackTime = this.trackTime.bind(this);
        this.playTrack = this.playTrack.bind(this);
        this.moveProgressBar = this.moveProgressBar.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.volumeIcon = this.volumeIcon.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.grabCurrentArtistAndPhoto = this.grabCurrentArtistAndPhoto.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.shuffle !== this.props.shuffle) return;
        if (prevProps.repeat !== this.props.repeat) return;

        if (this.props.paused && this.props.currentTrack) {
            this.audioPlayer.pause();
            return;
        } else if (prevProps.paused !== this.props.paused) {
            this.audioPlayer.play();
            return;
        } else if (
            (this.audioPlayer.src.length > 0 && this.props.playing && this.props.paused === false) &&
            (prevProps.currentTrack === this.props.currentTrack)
            ) {
            this.audioPlayer.play();
        } else if (this.props.playing && prevProps.currentTrack !== this.props.currentTrack) {
            this.audioPlayer.src = this.props.currentTrack.trackUrl;
            this.grabCurrentArtistAndPhoto();
            this.audioPlayer.play();
        } else if (
                (this.props.currentTrack && this.props.playing) &&
                (prevProps.currentTrack !== this.props.currentTrack)
            ) {
            let track = this.props.currentTrack;

            if (track) {
                this.props.previousTracks.push(track);
                this.audioPlayer.src = track.trackUrl;
                this.grabCurrentArtistAndPhoto();
                this.audioPlayer.play();
            }
        } 

        console.log("Current Props: ", this.props);
    }

    grabCurrentArtistAndPhoto() {
        if (this.props.albumPhoto.length > 0) {
            this.setState({
                currentPhoto: this.props.albumPhoto,
                currentArtist: this.props.currentArtist,
                currentTrack: this.props.currentTrack
            });
        } else {
            this.setState({
                currentPhoto: this.props.playlistPhoto,
                currentArtist: this.props.currentArtist,
                currentTrack: this.props.currentTrack
            });
        }
    }
                
    playTrack() {
        if (this.audioPlayer.src === "") return null;
        if (this.props.paused) {
            this.props.togglePause();
        } else {
            this.props.play();
        }
    }

    componentDidMount() {
        if (this.props.currrentUser) {
            this.updateInterval = setInterval(this.updateTime, 1000);

            this.audioPlayer.addEventListener("loadedmetadata", () => {
                this.setState({
                    trackLength: this.props.currentTrack.track_length
                });
            });

            this.audioPlayer.addEventListener("timeupdate", this.moveProgressBar, false);
        }
    }

    updateTime() {
        this.setState({ 
            currentTime: this.audioPlayer.currentTime,
            trackLength: this.audioPlayer.duration
        });
    }

    componentWillMount() {
        clearInterval(this.updateInterval);
    }

    trackTime(time) {
        if (time === 0 || isNaN(time)) return "0:00";

        const min = Math.floor(time / 60);
        let sec = Math.floor(time % 60);
        if (sec < 10) sec = `0${sec}`;
        return (
            `${min}:${sec}`
        );
    }

    // Credit for volume & mute: https://www.adobe.com/devnet/archive/html5/articles/html5-multimedia-pt3.html

    setVolume() {
        const volume = document.getElementById("volume");
        this.audioPlayer.volume = volume.value;
        this.setState({
            volume: this.audioPlayer.volume
        });
    }

    toggleMute() {
        this.audioPlayer.muted = !this.audioPlayer.muted;
    }

    volumeIcon() {
        const volume = document.getElementById("volume");

        if (this.audioPlayer.muted) return <FaVolumeMute />;

        if (volume.value >= 0.5) {
            return <FaVolumeUp />
        } else if (volume.value > 0.1 && volume.value < 0.5) {
            return <FaVolumeDown />
        } else if (volume.value > 0) {
            return <FaVolumeOff />
        }
    }

    moveProgressBar() {
        const progress = document.getElementById("progress");
        let width = 0;
        if (this.audioPlayer.currentTime > 0) {
            width = Math.floor((100 / this.audioPlayer.duration) * this.audioPlayer.currentTime); 
        }
        progress.style.width = width + "%";
    }

    render() {
        const currentTime = this.trackTime(this.state.currentTime);
        const trackLength = this.trackTime(this.state.trackLength);

        return (
            <nav className="music-player-nav-bar">
                <aside className="music-player-current-track-info">
                    {this.state.currentTrack ? 
                        (   
                            <>  
                                <img src={this.state.currentPhoto}/>
                                <div className="currently-playing-info-container">
                                    <p className="currently-playing-track-title">{this.state.currentTrack.title}</p>
                                    
                                    {this.state.currentArtist ? (
                                        <Link to={`/artists/${this.state.currentArtist.id}`}>
                                            <p>{this.state.currentArtist.name}</p>
                                        </Link>
                                    ) : (<div></div>)
                                    }
                                </div>
                            </>
                        )
                        : (<div></div>)
                    }
                </aside>

                <section className="music-player-control-container">

                    <div className="music-controls">
                        <button onClick={this.props.toggleShuffle}>
                            <FaRandom />
                        </button>

                        <button onClick={this.props.previousTrack}>
                            <FaStepBackward />
                        </button>

                        {this.props.playing && !this.props.paused ? (
                            <button 
                                className="play-pause-button"
                                onClick={this.props.togglePause}>
                                <FaPauseCircle />
                            </button>
                        ) : (
                            <button 
                                onClick={this.playTrack}
                                className="play-pause-button">
                                <FaPlay />
                            </button>
                        )}

                        <button onClick={this.props.nextTrack}>
                            <FaStepForward />
                        </button>

                        <button onClick={this.props.toggleRepeat}>
                            <MdRepeat />
                        </button>
                    </div>

                    <div className="track-time-container">
                        <p>{currentTime}</p>
                        <div className="progress-bar-container">
                            <div id="track-progress-bar">
                                <div id="progress"></div>
                            </div>
                        </div>
                        <p>{trackLength}</p>
                    </div>
                </section>

                <section className="volume-container">
                    <button id="mute" 
                        onClick={this.toggleMute}
                        className={(this.props.playing && this.audioPlayer.muted) ? "mute-green": ""}>
                        {this.props.playing ? this.volumeIcon() : <FaVolumeUp />}
                    </button>
                    <input 
                        id="volume" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        type="range" 
                        onChange={this.setVolume}
                        value={this.state.volume} 
                    />

                </section>

                <audio ref={ref => (this.audioPlayer = ref)}
                    onEnded={this.props.nextTrack}></audio>
            </nav>
        );
    }
}