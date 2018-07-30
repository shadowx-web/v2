import React, { Component } from 'react';
import Header from './header';
import TopNav from './topNav';
export default class Top extends Component {
  render() {
    return (
      <div id="top">
            
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                   
                    <Header/>
                    <TopNav/>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                       
                        <ul className="nav navbar-nav">
                            <li><a href="dashboard.html">Dashboard</a></li>
                            <li><a href="table.html">Tables</a></li>
                            <li className='dropdown '>
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                                            Form Elements <b className="caret"></b>
                                        </a>
                                <ul className="dropdown-menu">
                                    <li><a href="form-general.html">General</a></li>
                                    <li><a href="form-validation.html">Validation</a></li>
                                    <li><a href="form-wysiwyg.html">WYSIWYG</a></li>
                                    <li><a href="form-wizard.html">Wizard &amp; File Upload</a></li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>
               
            </nav>
          
            <header className="head">
                <div className="search-bar">
                    <form className="main-search" action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Live Search ..."/>
                            <span className="input-group-btn">
                                                <button className="btn btn-primary btn-sm text-muted" type="button">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </span>
                                            </div>
                    </form>
                    
                </div>
             
                <div className="main-bar">
                    <h3>
              <i className="fa fa-home"></i>&nbsp;
            Metis
          </h3>
                </div>
              
            </header>
       
        </div>
    );
  }
}