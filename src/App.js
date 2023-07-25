import { useEffect, useState } from "react";
import Table from "./components/Table";
import {apiUrl} from "./data";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [tableData, setTableData] = useState(null);

  //handling state of spinner
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setTableData(output);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[]);

  return (
    <div className="app">
    {
      loading ? (<Spinner/>) : (<Table tableData={tableData}/>)
    }
    </div>
  );
}

export default App;
