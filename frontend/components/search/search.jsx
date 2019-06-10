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

    render() {
        return (
            <form className="search-container">
                <input 
                    placeholder="Search..."
                    onChange={this.handleSearchInput}
                    type="text"/>
            </form>
        )
    }
};

export default Search;