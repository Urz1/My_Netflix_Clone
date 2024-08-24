import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";

import List from "../components/List";
import axios from 'axios';


const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState();
   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 useEffect(() => {
    // Fetch data using Axios
    axios.get('http://localhost:8000/api/list',{
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzZkY2U2NDk5ZDI3OTQ1YmI2NDRmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNDMyOTI0MiwiZXhwIjoxNzI0NzYxMjQyfQ.jIRhvZmv-VF9_fF0shX_tgyA8c3oritfF0y2HV-EQ_o`
      }
    })
    .then(response => {
      setData(response.data); // Update state with fetched data
        console.log(response.data)
        // {data}
      setLoading(false);       // Set loading to false once data is fetched
    })
    .catch(err => {
      setError(err.message);   // Handle error
      setLoading(false);
    });
  }, []);  // Empty dependency a
  return (
    <div className="bg-black">
      <Navbar />

      <Featured type={type} />

      <div className="overflow-hidden">
      {data.map((list)=>{
        console.log(list);
        
          return <List lists={list}/>
        })}
        
        {/* <List />
        <List />
        <List /> */}
      </div>
    </div>
  );
};


export default Home;

{
  /* <div className="p-4 border border-gray-300 space-y-4"> */
}



// {data.map((list)=>{
//   <List list = {list}/>
// })}
