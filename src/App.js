import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './pages/Home';
import Videos from './pages/Videos';

   
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route exact path='/videos' component={Videos}/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
