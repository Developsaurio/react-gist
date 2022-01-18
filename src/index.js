import React from 'react';
import ReactDOM from 'react-dom';
import './GlobalStyles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './containers/Layout';
import Videos from './pages/Videos';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      {/* <App /> */}
      <Videos/>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
