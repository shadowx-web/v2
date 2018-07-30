import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Li extends Component {


  render() {

  	const {label,link,cssClass,iconclass}=this.props; 

    return (
    	<li>
       <Link to={link}><span className={cssClass}>
                  <i className={iconclass}></i>
                  &nbsp; {label}
                </span></Link>
          
            	
           
        </li>

     );
	}
}	