import React, { Component } from 'react';
//import logo from './logo.svg';
export default class Right extends Component {
  render() {
    return (	
 		
       
        
        <div id="right" className="onoffcanvas is-right is-fixed bg-light" aria-expanded="false">
            <a className="onoffcanvas-toggler" href="#right" data-toggle="onoffcanvas" aria-expanded="false">&nbsp;</a>
            <br/>
            <br/>
            <div className="alert alert-danger">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Warning!</strong> Best check yo self, you're not looking too good.
            </div>
            
            <div className="well well-small dark">
                <ul className="list-unstyled">
                    <li>Visitor <span className="inlinesparkline pull-right">1,4,4,7,5,9,10</span></li>
                    <li>Online Visitor <span className="dynamicsparkline pull-right">Loading..</span></li>
                    <li>Popularity <span className="dynamicbar pull-right">Loading..</span></li>
                    <li>New Users <span className="inlinebar pull-right">1,3,4,5,3,5</span></li>
                </ul>
            </div>
            
            <div className="well well-small dark">
                <button className="btn btn-block">Default</button>
                <button className="btn btn-primary btn-block">Primary</button>
                <button className="btn btn-info btn-block">Info</button>
                <button className="btn btn-success btn-block">Success</button>
                <button className="btn btn-danger btn-block">Danger</button>
                <button className="btn btn-warning btn-block">Warning</button>
                <button className="btn btn-inverse btn-block">Inverse</button>
                <button className="btn btn-metis-1 btn-block">btn-metis-1</button>
                <button className="btn btn-metis-2 btn-block">btn-metis-2</button>
                <button className="btn btn-metis-3 btn-block">btn-metis-3</button>
                <button className="btn btn-metis-4 btn-block">btn-metis-4</button>
                <button className="btn btn-metis-5 btn-block">btn-metis-5</button>
                <button className="btn btn-metis-6 btn-block">btn-metis-6</button>
            </div>
            
            
        </div>
     
       );
	}
}