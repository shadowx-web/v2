import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title">
            <a href="/" className="site_title">
              <img
                src="../../logo.png"
                style={{ width: "40px" }}
                alt="logo"
                className="img-circle "
              />
              <span>Shadows X</span>
            </a>
          </div>

          <div className="clearfix" />

          <br />

          <div
            id="sidebar-menu"
            className="main_menu_side hidden-print main_menu"
          >
            <div className="menu_section">
              <ul className="nav side-menu">
                <li className="active">
                  <a href="<?php echo $page; ?>">
                    <i className="fa fa-laptop" />HOME<span className="label label-success pull-right">
                      New
                    </span>
                  </a>
                </li>

                <li>
                  <Link to="/enquiry">
                    <i className="fa fa-bug" />ENQUIRY<span className="fa fa-chevron-right" />
                  </Link>
                </li>
                <li>
                  <Link to="/orders">
                    <i className="fa fa-bug" />ORDERS<span className="fa fa-chevron-right" />
                  </Link>
                </li>
                <li>
                  <a href="photoGrapher_projects.php">
                    <i className="fa fa-bug" />MY ASSIGNMENTS<span className="fa fa-chevron-right" />
                  </a>
                </li>

                <li>
                  <a>
                    <i className="fa fa-edit" /> Forms{" "}
                    <span className="fa fa-chevron-down" />
                  </a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="form.html">General Form</a>
                    </li>
                    <li>
                      <a href="form_advanced.html">Advanced Components</a>
                    </li>
                    <li>
                      <a href="form_validation.html">Form Validation</a>
                    </li>
                    <li>
                      <a href="form_wizards.html">Form Wizard</a>
                    </li>
                    <li>
                      <a href="form_upload.html">Form Upload</a>
                    </li>
                    <li>
                      <a href="form_buttons.html">Form Buttons</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span className="fa fa-cog" aria-hidden="true" />
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span className="fa fa-sign-out" aria-hidden="true" />
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span className="fa fa-eye" aria-hidden="true" />
              </a>
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Logout"
                href="login.php"
              >
                <span className="fa fa-sign-out" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
