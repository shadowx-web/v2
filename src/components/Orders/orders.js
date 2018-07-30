import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar";
import Topnav from "../topNav/topnav";
import SearchBar from "../Enquiry/searchbar";
import TableView from "../common/tableView";
import OrderTable from "./OrderTable";
class Orders extends Component {
  constructor() {
    super();
    this.state = { userlist: [] };
    //this.list = this.list.bind(this);
  }
  list() {}
  render() {
    return (
      <div className="main_container">
        <Sidebar />
        <Topnav />
        <div className="right_col" role="main">
          <div className="">
            <SearchBar pagename="Orders" subtitle="List of Orders" />
            <div className="clearfix" />
            <div className="row">
              {/* <TableView list={this.list} /> */}
              <OrderTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
