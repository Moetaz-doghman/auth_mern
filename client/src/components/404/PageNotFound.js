import React from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function PageNotFound() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="page-banner-area bg-2">
        <div className="container-fluid">
          <div className="page-banner-content">
            <h1>404 Error</h1>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>404 Error</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="error-area ptb-100">
        <div className="container">
          <div className="top-content">
            <ul>
              <li>4</li>
              <li>0</li>
              <li>4</li>
            </ul>
          </div>
          <h2>Error 404: Page Not Found</h2>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <a href="index.html" className="btn default-btn">Back To Homepage</a>
        </div>
      </div>

     <Footer/>

    </div>
  );
}
