import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Topnav from "../components/topNav/topnav";
import Sidebar from "../components/sidebar/sidebar";

//import { userActions } from '../_actions';

class HomePage extends React.Component {
  componentDidMount() {
    //  this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    //  return (e) => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="main_container">
        <div className="col-md-3 left_col">
          <Sidebar />
        </div>
        <div className="top_nav">
          <div className="nav_menu">
            <Topnav />
          </div>
        </div>
        <div className="right_col" role="main">
          <div class="">
            <div className="page-title">
              <div className="title_left">
                <h3>
                  Users <small>List of all employees</small>
                </h3>
              </div>
              <div className="title_right">
                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix" />
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div className="x_content">
                    <div
                      className="modal fade bs-example-modal-lg"
                      tabindex="-1"
                      role="dialog"
                      ariaidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
//const connectedHomePage = connect(mapStateToProps)(HomePage);
//export { connectedHomePage as HomePage };
