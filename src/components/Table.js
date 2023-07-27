import React, {useState} from "react";
import Search from "./Search";
import NotFound from "./NotFound";

function Table(props) {
  const tableData = props.tableData;
  const removeDataHandler = props.removeDataHandler;
  let userData = [];
  const[checked, setChecked] = useState(false);

  function getTableData() {
    tableData.forEach((user) => {
      userData.push(user);
    });
    return userData;
  }

  // function selectAllHandler(event){
  //   let checkboxes = document.querySelectorAll('.checkbox');
  //   if(event.target.checked){
  //     checkboxes.forEach((checkbox) => {
  //       checkbox.children[0].checked = false;
  //       checkbox.parentElement.style.background = '#fff';
  //     });
  //   } else{
  //     checkboxes.forEach((checkbox) => {
  //       checkbox.parentElement.style.background = '#e0e0e0';
  //     })
  //   }
  //   setChecked(event.target.value);
  // }

  function selectAllHandler(event){
    let checkboxes = document.querySelectorAll('.checkbox'); // Changed id to class
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked; // Correctly set the checked property
    });
    setChecked(event.target.checked); // Correctly set the state to the checked property of the event target
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
                    value={checked}
                    onChange={selectAllHandler}
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
            {tableData.length !== 0 ? (
              getTableData().map((user) => {
                return (
                  <tr className="table-row" key={user.id}>
                    <td className="table-desc">
                      <div className="checkbox-container">
                        <input
                          id="row-checkbox"
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
                      <button
                        className="remove-btn"
                        onClick={() => removeDataHandler(user.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <NotFound />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
