import { useEffect, useState } from "react";
import Table from "./components/Table";
import {apiUrl} from "./data";
import {toast} from "react-toastify";

function App() {
  const [tableData, setTableData] = useState(null);

  //handling state of spinner
  const [loading, setLoading] = useState(true);

  function fetchData() {
    setLoading(true);
    try {
      const response = fetch(apiUrl);
      const output = response.json();
      setTableData(output);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[])

  return (
    <div className="app">
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
