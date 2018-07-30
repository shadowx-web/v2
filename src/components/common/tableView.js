import React, { Component } from "react";
import AddenquiryModel from "../Enquiry/addEnquiry";
class TableView extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
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
          <div className="x_content">
            <table
              id="datatable-buttons"
              className="table table-striped table-bordered"
            >
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
              <tbody>{this.props.list()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TableView;
