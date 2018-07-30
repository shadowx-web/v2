import React, { Component } from "react";

class AddenquiryModel extends Component {
  render() {
    return (
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">
              Add System User
            </h4>
          </div>
          <div class="modal-body">
            <form
              class="form-horizontal form-label-left input_mask"
              method="post"
              action="./php_actions/add_office_user.php"
            >
              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                <input
                  type="text"
                  class="form-control has-feedback-left"
                  name="FirstName"
                  id="inputSuccess2"
                  placeholder="First Name"
                />
                <span
                  class="fa fa-user form-control-feedback left"
                  aria-hidden="true"
                />
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                <input
                  type="text"
                  class="form-control"
                  id="inputSuccess3"
                  name="LastName"
                  placeholder="Last Name"
                />
                <span
                  class="fa fa-user form-control-feedback right"
                  aria-hidden="true"
                />
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                <input
                  type="text"
                  class="form-control has-feedback-left"
                  name="Email"
                  id="inputSuccess4"
                  placeholder="Email/username"
                />
                <span
                  class="fa fa-envelope form-control-feedback left"
                  aria-hidden="true"
                />
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                <input
                  type="text"
                  class="form-control"
                  name="Phone"
                  id="inputSuccess5"
                  placeholder="Phone"
                />
                <span
                  class="fa fa-phone form-control-feedback right"
                  aria-hidden="true"
                />
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                <input
                  type="text"
                  class="form-control has-feedback-left"
                  name="Password"
                  id="inputSuccess4"
                  placeholder="Password"
                />
                <span
                  class="fa fa-envelope form-control-feedback left"
                  aria-hidden="true"
                />
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                <select
                  class="form-control"
                  ng-model="UserType"
                  name="UserType"
                >
                  <option value="">User Type</option>
                  <option>Admin</option>
                  <option value="Sales">Sales User</option>
                  <option>Manager</option>
                  <option>HR</option>
                  <option>Operation</option>
                  <option>Dispatch</option>
                  <option>Finance</option>
                  <option>Photographer</option>
                  <option>3rd party</option>
                </select>
                <span
                  class="fa fa-phone form-control-feedback right"
                  aria-hidden="true"
                />
              </div>

              <div
                class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback"
                ng-show="UserType=='Photographer'"
              >
                <select class="form-control has-feedback-left" name="UserRole">
                  <option value="">User Role</option>
                  <option>Traditional Photographer</option>
                  <option>Candid Photographer</option>
                  <option>Traditional Videograpgher</option>
                  <option>Traditional Cinematographher</option>
                  <option>Candid Cinematographher</option>

                  <option>Helicam</option>
                  <option>Jimmy Jib</option>
                </select>
                <span
                  class="fa fa-envelope form-control-feedback left"
                  aria-hidden="true"
                />
              </div>

              <div class="ln_solid" />

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button class="btn btn-primary" type="reset">
                  Reset
                </button>
                <button type="submit" class="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddenquiryModel;
