import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import BrowseNav from './browse_nav';
import FeaturedContainer from './featured_container';
import ChartsContainer from './charts_container';
import GenresContainer from './genres_container';
import NewReleasesContainer from './new_releases_container';

const Collection = (props) => (
    <main className="collection-content">
        <BrowseNav openModal={props.openModal} />
        <div className="collection-content-index">
            <ProtectedRoute exact path="/browse/featured" component={FeaturedContainer} />
            <ProtectedRoute exact path="/browse/charts" component={ChartsContainer} />
            <ProtectedRoute exact path="/browse/genres" component={GenresContainer} />
            <ProtectedRoute exact path="/browse/newreleases" component={NewReleasesContainer} />
        </div>
    </main>
);

export default Collection;