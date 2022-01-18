import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './containers/Layout';
import Home from './pages/Home';
import Videos from './pages/Videos';

const YOUTUBE_API_URL= 'https://www.googleapis.com/youtube/v3/search';
const KEY = 'AIzaSyDcmvhajFZY_7MjXmJJVAkHxBXy1gsR3Ps';
const url = `${YOUTUBE_API_URL}?part=snippet&key=${KEY}`;

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {      
    fetch(url).then((res)=> res.json()).then((elements) =>  setData(elements));
  }, []);
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home data={data}/>}/>
          <Route path='/videos' element={<Videos />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
