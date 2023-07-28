import React, { useState, useEffect } from "react";
import Search from "./Search";
import NotFound from "./NotFound";
import DeleteSelectedButton from "./DeleteSelectedButton";

function Table(props) {
  const tableData = props.tableData;
  const setTableData = props.setTableData;
  const removeDataHandler = props.removeDataHandler;
  // let userData = [];
  const [checked, setChecked] = useState(false);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [filteredData, setFilteredData] = useState([...tableData]);

  useEffect(() => {
    setFilteredData(tableData);
  }, [tableData]);

  // function getTableData() {
  //   tableData.forEach((user) => {
  //     userData.push(user);
  //   });
  //   return userData;
  // }

  function selectAllHandler(event) {
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked; // Correctly set the checked property
      setSelectedRowIds(tableData.map((user) => user.id));
    });
    setChecked(event.target.checked); // Correctly set the state to the checked property of the event target
  }

  function deSelectTHeadCheckboxAfterDeleteRows() {
    let checkbox = document.getElementById("checkbox-all-search");
    checkbox.checked = false;
    setChecked(checkbox);
    setSelectedRowIds([]);
  }

  return (
    <div className="container">
      <Search userData={tableData} setFilteredData={setFilteredData} />
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
            {filteredData.length !== 0 ? (
              filteredData.map((user) => {
                return (
                  <tr className="table-row" key={user.id}>
                    <td className="table-desc">
                      <div className="checkbox-container">
                        <input
                          id="row-checkbox"
                          type="checkbox"
                          className="checkbox"
                          checked={selectedRowIds.includes(user.id)}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSelectedRowIds([...selectedRowIds, user.id]);
                            } else {
                              setSelectedRowIds(
                                selectedRowIds.filter((id) => id !== user.id)
                              );
                            }
                          }}
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
      <DeleteSelectedButton
        selectedRowIds={selectedRowIds}
        setSelectedRowIds={setSelectedRowIds}
        userData={tableData}
        setTableData={setTableData}
        deSelectTHeadCheckboxAfterDeleteRows={
          deSelectTHeadCheckboxAfterDeleteRows
        }
      />
    </div>
  );
}
export default Table;
