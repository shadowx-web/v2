import React, { Component } from 'react';
//import logo from './logo.svg';
export default class TopNav extends Component {
  render() {
    return (	
 		
       
        
        <div className="topnav">
                        <div className="btn-group">
                            <a data-placement="bottom" data-original-title="Fullscreen" data-toggle="tooltip" className="btn btn-default btn-sm" id="toggleFullScreen">
                                        <i className="glyphicon glyphicon-fullscreen"></i>
                                    </a>
                        </div>
                        <div className="btn-group">
                            <a data-placement="bottom" data-original-title="E-mail" data-toggle="tooltip" className="btn btn-default btn-sm">
                                        <i className="fa fa-envelope"></i>
                                        <span className="label label-warning">5</span>
                                    </a>
                            <a data-placement="bottom" data-original-title="Messages" href="/#" data-toggle="tooltip" className="btn btn-default btn-sm">
                                        <i className="fa fa-comments"></i>
                                        <span className="label label-danger">4</span>
                                    </a>
                            <a data-toggle="modal" data-original-title="Help" data-placement="bottom" className="btn btn-default btn-sm" href="#helpModal">
                                        <i className="fa fa-question"></i>
                                    </a>
                        </div>
                        <div className="btn-group">
                            <a href="login.html" data-toggle="tooltip" data-original-title="Logout" data-placement="bottom" className="btn btn-metis-1 btn-sm">
                                        <i className="fa fa-power-off"></i>
                                    </a>
                        </div>
                        <div className="btn-group">
                            <a data-placement="bottom" data-original-title="Show / Hide Left" data-toggle="tooltip" className="btn btn-primary btn-sm toggle-left" id="menu-toggle">
                                        <i className="fa fa-bars"></i>
                                    </a>
                            <a href="#right" data-toggle="onoffcanvas" className="btn btn-default btn-sm" aria-expanded="false">
                                        <span className="fa fa-fw fa-comment"></span>
                                    </a>
                        </div>
                    </div>
     
       );
	}
}