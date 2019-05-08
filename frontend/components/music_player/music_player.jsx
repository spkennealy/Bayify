import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrack: null,
            volume: 1,
            trackLength: 0,
            runTime: 0,
            muted: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if ((prevProps.currentTrack !== this.props.currentTrack) && prevProps.playing === false) {
            let track = this.props.currentTrack;

            if (track) {
                this.audioPlayer.src = track.trackUrl;
                this.setState({
                    currentTrack: track
                });
                this.audioPlayer.play();
            }
        // } else if (this.props.playing === false) {
        //     this.audioPlayer.pause();
        //     this.setState({
        //         currentTrack: null,
        //         trackLength: 0,
        //         runTime: 0
        //     });
        }
    }

    componentDidMount() {
        this.audioPlayer.addEventListener("timeupdate", e => {
            this.setState({
                runTime: e.target.runTime,
                trackLength: e.target.trackLength
            });
        });
    }
    
    componentWillUnmount() {
        this.audioPlayer.removeEventListener("timeupdate", () => {});
    }

    trackTime(time) {
        const min = Math.floor(time / 60);
        let sec = time % 60;
        if (sec < 10) sec = `0${sec}`;
        return (
            `${min}:${sec}`
        );
    }

    render() {
        const runTime = this.trackTime(this.state.runTime);
        const trackLength = this.trackTime(this.state.trackLength);

        return (
            <nav className="music-player-nav-bar">
                <aside className="music-player-current-track-info">


                </aside>

                <section className="music-player-control-container">
                    {this.props.playing === true ? (
                        <button onClick={this.props.pause}>
                            PAUSE BUTTON
                        </button>
                    ) : (
                        <button onClick={this.props.play}>
                            PLAY BUTTON
                        </button>
                    )}

                </section>

                <audio controls ref={ref => (this.audioPlayer = ref)}></audio>
            </nav>
        );
    }
}