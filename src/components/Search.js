import React from 'react';

function Search(){
    return(
           <div className="searchbar-container">
                <input type="search" name="user-input" id="input" placeholder="Search by name, email or role" required/>
                <button className="btn-search" id="submit">Search</button>
            </div>
    );
}
export default Search;