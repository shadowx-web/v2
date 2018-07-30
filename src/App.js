import React, { Component } from "react";
//import './App.css';
import Top from "./Top";
import Left from "./components/left";
import Content from "./content";
//import Right from './right';
import Users from "./components/users.js";
import Order from "./components/order.js";
import customerReview from "./components/customerReview.js";
import Login from "./Login/login.js";
import Register from "./Register/Register.jsx";
import OrderDetails from "./components/orderdetails.js";
import PrivateRoute from "./hoc/PrivateRoute.js";
import authenticate from "./hoc/authenticate.js";
//import Util from './hoc/util.js';
import Loader from "./hoc/loader.js";
import HomePage from "./HomePage/HomePage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Enquiry from "./components/Enquiry/enquiry";
import Orders from "./components/Orders/orders";
//import { PrivateRoute } from './hoc/PrivateRoute.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userlist: []
    };
    //   this.serach=this.serach.bind(this);
    //   this.userList=this.userList.bind(this);
    //   this.loader=this.loader.bind(this);
  }

  componentWillMount() {
    fetch("https://api.randomuser.me/?results=50")
      .then(res => res.json())
      .then(res => {
        //console.log(res.results);
        this.setState({ userlist: res.results });
      });
  }

  render() {
    return (
      <Router>
        <div className="dk" id="wrap">
          <PrivateRoute
            exact
            path="/"
            currentUser={true}
            component={HomePage}
          />
          {/*<Route exact path="/" component={Content} />*/}
          <Route
            exact
            path="/users"
            component={authenticate(Users, this.state.userlist)}
          />

          <Route exact path="/customerreview" component={customerReview} />
          <Route exact path="/customerreview/:id" component={customerReview} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/enquiry" component={Enquiry} />

          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/orderdetails/:urlValue"
            component={OrderDetails}
          />

          <Route exact path="/orders" component={Orders} />
        </div>
      </Router>
    );
  }
}

export default App;
