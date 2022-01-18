import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './containers/Layout';
import Home from './pages/Home';
import Videos from './pages/Videos';
// import { URL, KEY } from './resources/constants/urls';


const YOUTUBE_API_URL= 'https://www.googleapis.com/youtube/v3/search';
const KEY = 'AIzaSyDcmvhajFZY_7MjXmJJVAkHxBXy1gsR3Ps';
const url = `${YOUTUBE_API_URL}?part=snippet&key=${KEY}`;

const App = () => {
   
  useEffect(() => {      
    fetch(url).then((res)=> res.json()).then((data) => console.log(data));
  }, []);
  
  // console.log("DATA", data)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/videos' element={<Videos />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
