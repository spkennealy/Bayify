import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        };

        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSearchInput(e) {
        this.setState({
            search: e.target.value
        });
    }

    search() {

    }

    render() {
        return (
            <>
                <form className="search-container">
                    <div className="search-input-box">
                        <input 
                            className="search-input"
                            placeholder="Start typing..."
                            onChange={this.handleSearchInput}
                            type="text"/>
                    </div>
                </form>
                <ul className="search-results">
                    <li className="artists-search-results-container">
                        <ul>
                            
                        </ul>
                    </li>
                    <li className="albums-search-results-container">
                        <ul>

                        </ul>
                    </li>
                    <li className="playlists-search-results-container">
                        <ul>

                        </ul>
                    </li>
                    <li className="tracks-search-results-container">
                        <ul>

                        </ul>
                    </li>
                </ul>
            </>
        )
    }
};

export default Search;