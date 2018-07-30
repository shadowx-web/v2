import React, { Component } from "react";

class OrderTable extends Component {
  constructor() {
    super();
    this.list = this.list.bind(this);
  }

  list() {}
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel" />
        {/* <div className="x_content">
          <div
            className="modal fade bs-example-modal-lg"
            role="dialog"
            ariaidden="true"
          />
        </div> */}

        <table
          id="datatable-buttons"
          className="table table-striped table-bordered"
        >
          <thead>
            <tr>
              <th>Sn</th>
              <th>Ord No</th>
              <th>Main Date</th>
              <th>Party Name</th>
              <th>Event Type</th>
              <th>Photographers</th>
              <th>view</th>
              <th>steps</th>
            </tr>
          </thead>
          <tbody>{this.list()}</tbody>
        </table>
      </div>
    );
  }
}

export default OrderTable;
