import React from 'react';
import './App.css';
import Cards from './compo/Cards'
import Navbar from './compo/Navbar'
import Filter from './compo/Filter'
import Spinner from './compo/Spinner'
import {apiUrl ,filterData} from './data'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


function App() {
 const [courses,setCourses]=useState(null);
 const [loading,setLoading]=useState(true);
  async function fetchData(){

    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.jsson();

      setCourses(output);
    }
    catch(error){
       toast.error("something is wrong");

    }
    setLoading(false); 
  }

  useEffect(() => {
    fetchData();
  
  }, [])
  return (
    <div >
    <div>
      <Navbar/>
    </div>
    <div>
      <Filter filterData={filterData}/>
    </div>
    <div>
      {loading?(<Spinner/>): (<Cards courses={courses}/>)} 
    </div>
    <div>

    </div>
    </div>
  );
}

export default App;
