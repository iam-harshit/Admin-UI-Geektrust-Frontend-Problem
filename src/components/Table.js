import React from "react";
import Search from "./Search";

function Table() {
  return (
    <div>
      <Search/>
      <br/>
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
          <tr className="table-row">
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
            <td className="table-data">John</td>
            <td className="table-data">john@gmail.com</td>
            <td className="table-data">Member</td>
            <td className="table-action">
              <button className="edit-btn">
                Edit
              </button>
              <button className="remove-btn">
                Remove
              </button>
            </td>
          </tr>
          <tr className="table-row">
            <td className="table-desc">
              <div className="checkbox-container">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="checkbox"
                />
                <label htmlFor="checkbox-table-search-2" className="sr">
                  checkbox
                </label>
              </div>
            </td>
            <td className="table-data">Abhay</td>
            <td className="table-data">abhay@abc.com</td>
            <td className="table-data">Member</td>
            <td className="table-action">
              <button className="edit-btn">
                Edit
              </button>
              <button className="remove-btn">
                Remove
              </button>
            </td>
          </tr>
          <tr className="table-row">
            <td className="table-desc">
              <div className="checkbox-container">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="checkbox"
                />
                <label htmlFor="checkbox-table-search-3" className="sr">
                  checkbox
                </label>
              </div>
            </td>
            <td className="table-data">Rick</td>
            <td className="table-data">rick@xyz.com</td>
            <td className="table-data">Admin</td>
            <td className="table-action">
              <button className="edit-btn">
                Edit
              </button>
              <button className="remove-btn">
                Remove
              </button>
            </td>
          </tr>
          <tr className="table-row">
            <td className="table-desc">
              <div className="checkbox-container">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="checkbox"
                />
                <label htmlFor="checkbox-table-search-3" className="sr">
                  checkbox
                </label>
              </div>
            </td>
            <td className="table-data">Lina</td>
            <td className="table-data">lina@gmail.com</td>
            <td className="table-data">Member</td>
            <td className="table-action">
              <button className="edit-btn">
                Edit
              </button>
              <button className="remove-btn">
                Remove
              </button>
            </td>
          </tr>
          <tr className="table-row">
            <td className="table-desc">
              <div className="checkbox-container">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="checkbox"
                />
                <label htmlFor="checkbox-table-search-3" className="sr">
                  checkbox
                </label>
              </div>
            </td>
            <td className="table-data">Mark</td>
            <td className="table-data">mark@yahoo.com</td>
            <td className="table-data">Admin</td>
            <td className="table-action">
              <button className="edit-btn">
                Edit
              </button>
              <button className="remove-btn">
                Remove
              </button>
            </td>
          </tr>
          <tr className="table-row">
            <td className="table-desc">
              <div className="checkbox-container">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  className="checkbox"
                />
                <label htmlFor="checkbox-table-search-3" className="sr">
                  checkbox
                </label>
              </div>
            </td>
            <td className="table-data">Sanjay</td>
            <td className="table-data">sanjay@edc.com</td>
            <td className="table-data">Member</td>
            <td className="table-action">
              <button className="edit-btn">
                Edit
              </button>
              <button className="remove-btn">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}
export default Table;
