import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Topnav from "../topNav/topnav";
import Sidebar from "../sidebar/sidebar";
import AddenquiryModel from "./addEnquiry";
import SearchBar from "./searchbar";
import TableView from "../common/tableView";

//import { userActions } from '../_actions';

class Enquiry extends React.Component {
  constructor() {
    super();
    this.state = { userlist: [] };
    this.list = this.list.bind(this);
  }
  componentDidMount() {
    //  this.props.dispatch(userActions.getAll());
    fetch("https://api.randomuser.me/?results=5")
      .then(res => res.json())
      .then(res => {
        //console.log(res.results);
        this.setState({ userlist: res.results });
      });
  }

  handleDeleteUser(id) {
    //  return (e) => this.props.dispatch(userActions.delete(id));
  }
  showModel(e) {
    console.log("====================================");
    console.log(e.target.id);
    console.log("====================================");
  }
  list() {
    return this.state.userlist.map((res, index) => {
      console.log(res);
      return (
        <tr key={index}>
          <td>{res.cell}</td>
          <td>{res.email}</td>
          <td>{res.gender}</td>
          <td>{res.id.value}</td>
          <td>{res.name.first}</td>
          <td>{res.cell}</td>
          <td>{res.cell}</td>

          <td>
            <button
              data-toggle="modal"
              data-target="#view-modal"
              onClick={this.showModel}
              data-id={res.email}
              id={res.id.value}
              className="btn btn-sm btn-info"
            >
              <i className="glyphicon glyphicon-eye-open" /> View
            </button>
            <a className="btn btn-danger btn-sm">
              <i className="fa fa-trash-o" />
            </a>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="main_container">
        <Sidebar />
        <Topnav />
        <div className="right_col" role="main">
          <div className="">
            <SearchBar pagename="Enquiry" subtitle="List of Enquiry" />
            <div className="clearfix" />
            <div className="row">
              {/* <TableView list={this.list} /> */}
              <div className="x_panel">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target=".bs-example-modal-lg"
                >
                  +
                </button>
                <div
                  className="modal fade bs-example-modal-lg"
                  role="dialog"
                  ariaidden="true"
                >
                  <AddenquiryModel />
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="x_content">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Type</th>
                          <th>Role</th>
                          <th>UserName</th>
                          <th>Password</th>
                          <th>Status</th>
                          <th>view</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.userlist.length
                          ? this.list()
                          : "Loading data...."}
                      </tbody>
                    </table>
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

export default Enquiry;
//const connectedHomePage = connect(mapStateToProps)(HomePage);
//export { connectedHomePage as HomePage };
