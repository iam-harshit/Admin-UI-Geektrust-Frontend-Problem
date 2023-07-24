import React from 'react';

function Search(){
    // flex bg-[url('./asset/search-icon.svg')] bg-no-repeat bg-[length:20px] p-6 relative bg-white rounded-2xl shadow-l
    return(
           <div className="searchbar-container">
                <input type="search" name="user-input" id="input" placeholder="Search by name, email or role" required/>
                <button className="btn-search" id="submit">Search</button>
            </div>
    );
}
export default Search;