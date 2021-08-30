import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="ui fluid action input" >
                <input type="text" placeholder="Search...."/>
                <button class="ui button">Search</button>
            </div>
        );
    }
}

export default SearchBar;