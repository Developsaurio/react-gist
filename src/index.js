import React from 'react';
import ReactDOM from 'react-dom';
import './GlobalStyles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './containers/Layout';

const dark = true;

ReactDOM.render(
  <React.StrictMode>
    <Layout dark={dark}>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
