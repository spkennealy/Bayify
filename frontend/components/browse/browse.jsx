import React from 'react';
// import { Link } from 'react-router-dom';

const Browse = (props) => (
    <main>
        <button onClick={props.logout}>LOG OUT</button>
        {/* <Switch>
            <Route path="/browse/featured" component={Featured} />
        </Switch> */}
    </main>
);

export default Browse;