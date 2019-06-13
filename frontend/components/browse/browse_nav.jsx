import React from 'react';
import { NavLink } from 'react-router-dom';

const CollectionNav = (props) => (
    <nav className="collection-nav">
        <ul>
            <li>
                <NavLink
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/browse/featured">
                    Featured
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/browse/charts">
                    Charts
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/browse/genres">
                    Genres & Moods
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/browse/newreleases">
                    New Releases
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default CollectionNav;