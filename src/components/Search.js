import React, { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState('');

    const searchHandler = (event) => {
      setSearch(event.target.value);
  
      const filteredData = props.userData.filter(user =>
        user.name.toLowerCase().startsWith(event.target.value.toLowerCase()) ||
        user.email.toLowerCase().startsWith(event.target.value.toLowerCase()) ||
        user.role.toLowerCase().startsWith(event.target.value.toLowerCase())
      );
  
      props.setTableData(filteredData);
    }

  return (
    <div className="searchbar-container">
      <input
        type="search"
        name="user-input"
        id="input"
        placeholder="Search by name, email or role"
        value={search}
        onChange={searchHandler}
        required
      />
      <button className="btn-search" id="submit">
        Search
      </button>
    </div>
  );
}
export default Search;
