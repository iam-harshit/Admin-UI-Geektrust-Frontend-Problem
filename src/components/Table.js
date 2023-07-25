import React from "react";
import Search from "./Search";

function Table(props) {
  const tableData = props.tableData;
  let userData = [];

  function getTableData() {
    tableData.forEach((user) => {
      userData.push(user);
    });
    return userData;
  }

  return (
    <div className="container">
      <Search />
      <br />
      <div className="main">
        <table className="table">
          <thead className="table-head">
            <tr>
              <th scope="col" className="head-cell">
                <div className="checkbox-container">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="checkbox"
                  />
                  <label htmlFor="checkbox-all-search" className="sr">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="col-name">
                Name
              </th>
              <th scope="col" className="col-name">
                Email
              </th>
              <th scope="col" className="col-name">
                Role
              </th>
              <th scope="col" className="col-name">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {getTableData().map((user) => {
              return (
                <tr className="table-row" key={user.id}>
                  <td className="table-desc">
                    <div className="checkbox-container">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="checkbox"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="table-data">{user.name}</td>
                  <td className="table-data">{user.email}</td>
                  <td className="table-data">{user.role}</td>
                  <td className="table-action">
                    <button className="edit-btn">Edit</button>
                    <button className="remove-btn">Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
