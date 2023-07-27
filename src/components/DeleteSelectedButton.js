import React from "react";
import { toast } from "react-toastify";

function DeleteSelectedButton(props) {

    const setTableData = props.setTableData;
    const deSelectTHeadCheckboxAfterDeleteRows = props.deSelectTHeadCheckboxAfterDeleteRows;

    function deleteSelected(){
        let userData = props.userData;
        const checked = props.checked;
        if(checked){
          userData = [];
          toast.success("Selected rows deleted successfully");
          setTableData(userData);
          deSelectTHeadCheckboxAfterDeleteRows();
        }
      }

  return (
    <div>
        <button className="deleted-btn" onClick={deleteSelected}>Delete Selected</button>
    </div>
  );
}

export default DeleteSelectedButton;
