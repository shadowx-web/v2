import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import logo from './logo.svg';
class Register extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:''

        }
        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

  registerUser(e){
    e.preventDefault();

    const {dispatch}=this.props;
    console.log(this.props);
    console.log(this.state);
    dispatch({type:"REGISTER_USER",payload:this.state});
    //const {username,password}=this.state;
  }

  handleChange(e){

    const {name,value}=e.target;
    //console.log()
    this.setState({[name]:value})
    console.log(this.state)
  }
  render() {
    return (
<div className="row">
    <div className="col-md-6">
    </div>  

        <div className="col-md-3">	
        <div className="form-signin">
    <div className="text-center">
        <img src="/assets/img/logo.png" alt="Metis Logo"/>
    </div>
    <hr/>
   
	  	<div className="text-center">
	        <ul className="list-inline">
	            <li> <Link to="/login" className="text-muted">Login</Link></li>
	            <li><a className="text-muted" href="#forgot" data-toggle="tab">Forgot Password</a></li>
	            <li><a className="text-muted" href="#signup" data-toggle="tab">Signup</a></li>
	        </ul>
	    </div>

        <div id="signup" className="tab-pane">
            <form onSubmit={this.registerUser} >
                <input type="text" placeholder="username" name="username" onChange={this.handleChange} className="form-control top"/>
                 <br/>
                <input type="email" placeholder="mail@domain.com" name="email"  onChange={this.handleChange} className="form-control middle"/>
                 <br/>
                <input type="password" placeholder="password" name="password" onChange={this.handleChange} className="form-control middle"/>
                 <br/>
               
                <button className="btn btn-lg btn-success btn-block" type="submit">Register</button>
            </form>
        </div>
   
    <hr/>
    
  </div></div></div>
       );
	}
}

export default connect()(Register);