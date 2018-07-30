import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''

        }
        this.checkLogin = this.checkLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

  checkLogin(e){
    e.preventDefault();
    console.log(this.state);
    const {username,password}=this.state;
  }

  registerUser(e){
    e.preventDefault();
    console.log(this.state);
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
            <li><a className="text-muted" href="#login" data-toggle="tab">Login</a>
             </li>
            <li><a className="text-muted" href="#forgot" data-toggle="tab">Forgot Password</a></li>
            <li><Link to="register" className="text-muted">Signup</Link></li>
        </ul>
    </div>
    <div className="tab-content">
        <div id="login" className="tab-pane active">
            <form onSubmit={this.checkLogin}>
                <p className="text-muted text-center">
                    Enter your username and password
                </p>
                <input type="text" placeholder="Username" name="username" onChange={this.handleChange} className="form-control top"/>
                <br/>
                <input type="password" placeholder="Password" name="password" onChange={this.handleChange} className="form-control bottom"/>
                <div className="checkbox">
          <label>
            <input type="checkbox"/> Remember Me
          </label>
        </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>

        <div id="forgot" className="tab-pane">
            <form action="index.html">
                <p className="text-muted text-center">Enter your valid e-mail</p>
                <input type="email" placeholder="mail@domain.com" className="form-control"/>
                <br/>
                <button className="btn btn-lg btn-danger btn-block" type="submit">Recover Password</button>
            </form>
        </div>
        <div id="signup" className="tab-pane">
            <form onSubmit={this.registerUser} >
                <input type="text" placeholder="username" className="form-control top"/>
                 <br/>
                <input type="email" placeholder="mail@domain.com" className="form-control middle"/>
                 <br/>
                <input type="password" placeholder="password" className="form-control middle"/>
                 <br/>
                <input type="password" placeholder="re-password" className="form-control bottom"/>
                 <br/>
                <button className="btn btn-lg btn-success btn-block" type="submit">Register</button>
            </form>
        </div>
    </div>
    <hr/>
    
  </div></div></div>
       );
	}
}