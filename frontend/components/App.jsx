import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import BrowseContainer from './browse/browse_container';

const App = () => (
    <>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />


            {/* catch route when logged in */}
            <ProtectedRoute path="/browse/featured" component={BrowseContainer}/>
            <AuthRoute path="/" component={Splash}/>
        </Switch>
    </>
);

export default App;