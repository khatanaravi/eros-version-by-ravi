// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'


// ReactDOM.render(
//   <BrowserRouter
//     basename = {process.env.PUBLIC_URL}
//     >
//     <App />
//   </BrowserRouter>
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    {/* ✅ Wrap App here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);