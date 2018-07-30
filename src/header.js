import React, { Component } from 'react';
//import logo from './logo.svg';
export default class Header extends Component {
  render() {
    return (	
 		
       
        
        <header className="navbar-header">
	        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	          <span className="sr-only">Toggle navigation</span>
	           <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	        </button>
          <a href="index.html" className="navbar-brand">
          	{/* <img src={logo} className="App-logo" alt="logo" />*/}
          </a>
          
        </header>
     
       );
	}
}
