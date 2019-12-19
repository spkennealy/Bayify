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
            currentPhoto: "",
            currentTrack: "",
            playing: false,
            paused: false
        };

        this.updateTime = this.updateTime.bind(this);
        this.trackTime = this.trackTime.bind(this);
        this.playTrack = this.playTrack.bind(this);
        this.moveProgressBar = this.moveProgressBar.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.volumeIcon = this.volumeIcon.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.grabCurrentArtistAndPhoto = this.grabCurrentArtistAndPhoto.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.changeTime = this.changeTime.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.shuffle !== this.props.shuffle) return;
        if (prevProps.repeat !== this.props.repeat) return;

        if (!prevProps.paused && this.props.paused || !prevState.paused && this.props.paused) {
            // console.log("1");
            this.audioPlayer.pause();
            this.setState({ paused: true });
            return;
        } else if ((prevProps.paused !== this.props.paused) || (prevState.paused !== this.state.paused)) {
            // console.log("2");
            this.audioPlayer.play();
            this.setState({ 
                paused: false, 
                playing: true,
                currentTime: this.audioPlayer.currentTime,
                trackLength: this.audioPlayer.duration
            });
            return;
        } else if (
            (this.audioPlayer.src.length > 0 && this.props.playing && this.props.paused === false) &&
            (this.state.currentTrack.id !== this.props.currentTrack.id)
            ) {
            // console.log("3");
            this.audioPlayer.src = this.props.currentTrack.trackUrl;
            this.grabCurrentArtistAndPhoto();
            this.audioPlayer.play();
            this.setState({ 
                paused: false, 
                playing: true,
                currentTime: this.audioPlayer.currentTime,
                trackLength: this.audioPlayer.duration
            });
        } else if (this.props.playing && prevProps.currentTrack !== this.props.currentTrack) {
            // console.log("4"); 
            if (this.props.paused === true) this.props.togglePause();
            this.audioPlayer.src = this.props.currentTrack.trackUrl;
            this.grabCurrentArtistAndPhoto();
            this.audioPlayer.play();
            this.setState({ 
                paused: false, 
                playing: true,
                currentTime: this.audioPlayer.currentTime,
                trackLength: this.audioPlayer.duration 
            });
        } else if (
                (this.props.currentTrack && this.props.playing) &&
                (prevProps.currentTrack !== this.props.currentTrack)
            ) {
            // console.log("5");
            if (this.props.paused === true) this.props.togglePause();
            let track = this.props.currentTrack;
            
            if (track) {
                this.props.previousTracks.push(track);
                this.audioPlayer.src = track.trackUrl;
                this.grabCurrentArtistAndPhoto();
                this.audioPlayer.play();
                this.setState({ 
                    paused: false, 
                    playing: true,
                    currentTime: this.audioPlayer.currentTime,
                    trackLength: this.audioPlayer.duration 
                });
            }
        } 
    }

    grabCurrentArtistAndPhoto() {
        this.setState({
            currentPhoto: this.props.albumPhoto,
            currentArtist: this.props.currentArtist,
            currentTrack: this.props.currentTrack
        });
    }
                
    playTrack() {
        if (this.audioPlayer.src === "") return null;
        if (this.props.paused) {
            this.props.togglePause();
        } else {
            this.props.play();
        }
    }

    handleNext() {
        if (this.props.queue.length > 0) {
            this.props.nextTrack();
        }
    }

    handlePrev() {
        if (this.state.currentTime > 5) {
            this.audioPlayer.src = this.props.currentTrack.trackUrl;
            this.grabCurrentArtistAndPhoto();
            this.audioPlayer.play();
        } else if (this.props.previousTracks.length > 0) {
            const tracks = Object.values(this.props.tracks);
            let i = 0;
            while (tracks[i].id !== this.props.currentTrack.id && tracks.length > 0) tracks.shift();
            this.props.setQueue(tracks);
            this.props.previousTrack();
        }
    }

    componentDidMount() {
        this.updateInterval = setInterval(this.updateTime, 1000);

        this.audioPlayer.addEventListener("loadedmetadata", () => {
            this.setState({
                trackLength: this.props.currentTrack.track_length
            });
        });

        this.audioPlayer.addEventListener("timeupdate", this.moveProgressBar, false);

        // const defaultProgressBar = document.getElementById("track-progress-bar");
        // defaultProgressBar.addEventListener("click", e => this.changeTime(e));
    }

    updateTime() {
        if (this.audioPlayer) {
            this.setState({ 
                currentTime: this.audioPlayer.currentTime,
                trackLength: this.audioPlayer.duration
            });
        }
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
        progress.style.value = width; // + "%";
    }

    changeTime(e) {
        if (this.state.playing) {
            const defaultProgressBar = document.getElementById("track-progress-bar");
            const mouseX = e.pageX - defaultProgressBar.offsetLeft;
            const newTime = mouseX * this.audioPlayer.duration / defaultProgressBar.offsetWidth; 
            this.audioPlayer.currentTime = newTime;
        }
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

                        <button onClick={this.handlePrev}>
                            <FaStepBackward />
                        </button>

                        {this.state.playing && !this.state.paused ? (
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

                        <button onClick={this.handleNext}>
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
                                {/* <div id="progress"></div> */}
                                <input 
                                    type="range" 
                                    id="progress"
                                    step="any"
                                    min="0"
                                    max={this.state.trackLength ? this.state.trackLength : 0}
                                    value={this.state.currentTime}
                                    // onChange={this.changeTime}
                                    // onClick={this.changeTime}
                                ></input>
                                {/* <progress id="progress" value="0" max="1"></progress> */}
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