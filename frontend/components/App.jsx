import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container'; 
import BrowseContainer from './browse/browse_container';
import SearchContainer from './search/search_container';
import CollectionContainer from './collection/collection_container';
// import Splash from './splash/splash';
// import SideNavBar from './side_nav_bar/side_nav_bar';
// import SideNavBarContainer from './side_navbar/side_nav_bar_container';
// import MusicPlayerContainer from './muisc_player/music_player_container';

const App = () => (
    <>
        <Switch>
            {/* // ------- TEST ROUTES ------- // */}
            {/* <Route path="/nav" component={SideNavBar} /> */}
            {/* <Route exact path="/" component={SideNavBarContainer} /> */}
            {/* <Route exact path="/" component={MusicPlayerContainer} /> */}
            {/* // ----------- END ----------- // */}
            <ProtectedRoute exact path="/search/recent" component={SearchContainer} />
            <ProtectedRoute exact path="/collection/playlists" component={CollectionContainer} />
            <ProtectedRoute exact path="/browse/featured" component={BrowseContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HomeContainer}/>
            <Redirect to="/" />
        </Switch>
    </>
);

export default App;


