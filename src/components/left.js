import React, { Component } from 'react';
import Li from './LI.js';

export default class Left extends Component {
  constructor(){
    super();
    this.menuList = this.menuList.bind(this);
  }

menuList(){

  const menuItems = [
                     {"link":"/","label":"Dashboard","iconclass":"fa fa-dashboard","cssClass":"link-title"},
                     {"link":"/users","label":"UserList","iconclass":"fa fa-dashboard","cssClass":"link-title"},
                     {"link":"/order","label":"Orders","iconclass":"fa fa-dashboard","cssClass":"link-title"},
                     {"link":"/delivery","label":"delivery","iconclass":"fa fa-dashboard","cssClass":"link-title"},
                     {"link":"/customerreview","label":"customer review","iconclass":"fa fa-dashboard","cssClass":"link-title"},
                      {"link":"/login","label":"login","iconclass":"fa fa-dashboard","cssClass":"link-title"}
                    ];

   

   const a = menuItems.map((row)=>{
      return (<Li link={row.link}
                  label={row.label}
                  cssClass={row.cssClass} 
                  iconclass={row.iconclass} 
                  key={row.label}
                  />)
    })



   return a; 
  
};
  render() {
    



    return (	
        <div id="left">
            <div className="media user-media bg-dark dker">
                <div className="user-media-toggleHover">
                    <span className="fa fa-user"></span>
                </div>
                <div className="user-wrapper bg-dark">
                    <h3>Menu</h3>

                </div>
            </div>
           
            <ul id="menu" className="bg-blue dker">
                
                

                <li className="nav-divider"></li>
                {this.menuList()}
                
                <li className="">
                    <a href="/">
                                      <i className="fa fa-pencil"></i>
                                      <span className="link-title">
                                    Forms
                            </span>
                                      <span className="fa arrow"></span>
                                    </a>
                    <ul className="collapse">
                        <li>
                            <a href="form-general.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form General </a>
                        </li>
                        <li>
                            <a href="form-validation.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form Validation </a>
                        </li>
                        <li>
                            <a href="form-wizard.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form Wizard </a>
                        </li>
                        <li>
                            <a href="form-wysiwyg.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form WYSIWYG </a>
                        </li>
                    </ul>
                </li>

                
                { /*
                <li className="">
                    <a href="javascript:;">
                                      <i className="fa fa-building "></i>
                                      <span className="link-title">Layouts</span>
                                      <span className="fa arrow"></span>
                                    </a>
                    <ul className="collapse">
                        <li>
                            <a href="boxed.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Boxed Layout </a>
                        </li>
                        <li>
                            <a href="fixed-header-boxed.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Boxed Layout &amp; Fixed Header </a>
                        </li>
                        <li>
                            <a href="fixed-header-fixed-mini-sidebar.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Fixed Header and Fixed Mini Menu </a>
                        </li>
                        <li>
                            <a href="fixed-header-menu.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Fixed Header &amp; Menu </a>
                        </li>
                        <li>
                            <a href="fixed-header-mini-sidebar.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Fixed Header &amp; Mini Menu </a>
                        </li>
                        <li>
                            <a href="fixed-header.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Fixed Header </a>
                        </li>
                        <li>
                            <a href="fixed-menu-boxed.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Boxed Layout &amp; Fixed Menu </a>
                        </li>
                        <li>
                            <a href="fixed-menu.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Fixed Menu </a>
                        </li>
                        <li>
                            <a href="fixed-mini-sidebar.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Fixed &amp; Mini Menu </a>
                        </li>
                        <li>
                            <a href="fxhmoxed.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Boxed and Fixed Header &amp; Nav </a>
                        </li>
                        <li>
                            <a href="no-header-sidebar.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; No Header &amp; Sidebars </a>
                        </li>
                        <li>
                            <a href="no-header.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; No Header </a>
                        </li>
                        <li>
                            <a href="no-left-right-sidebar.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; No Left &amp; Right Sidebar </a>
                        </li>
                        <li>
                            <a href="no-left-sidebar-main-search.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; No Left Sidebar &amp; Main Search </a>
                        </li>
                        <li>
                            <a href="no-left-sidebar.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; No Left Sidebar </a>
                        </li>
                        <li>
                            <a href="no-main-search.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; No Main Search </a>
                        </li>
                        <li>
                            <a href="no-right-sidebar.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; No Right Sidebar </a>
                        </li>
                        <li>
                            <a href="sm.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Mini Sidebar </a>
                        </li>
                    </ul>
                </li>
                <li className="">
                    <a href="javascript:;">
                                      <i className="fa fa-tasks"></i>
                                      <span className="link-title">Components</span>
                                      <span className="fa arrow"></span>
                                    </a>
                    <ul className="collapse">
                        <li>
                            <a href="bgcolor.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Bg Color </a>
                        </li>
                        <li>
                            <a href="bgimage.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Bg Image </a>
                        </li>
                        <li>
                            <a href="button.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Buttons </a>
                        </li>
                        <li>
                            <a href="icon.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Icon </a>
                        </li>
                        <li>
                            <a href="pricing.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Pricing Table </a>
                        </li>
                        <li>
                            <a href="progress.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Progress </a>
                        </li>
                    </ul>
                </li>
                <li className="">
                    <a href="javascript:;">
                                      <i className="fa fa-pencil"></i>
                                      <span className="link-title">
                                    Forms
                            </span>
                                      <span className="fa arrow"></span>
                                    </a>
                    <ul className="collapse">
                        <li>
                            <a href="form-general.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form General </a>
                        </li>
                        <li>
                            <a href="form-validation.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form Validation </a>
                        </li>
                        <li>
                            <a href="form-wizard.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form Wizard </a>
                        </li>
                        <li>
                            <a href="form-wysiwyg.html">
                                          <i className="fa fa-angle-right"></i>&nbsp; Form WYSIWYG </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="table.html">
                                      <i className="fa fa-table"></i>
                                      <span className="link-title">Tables</span>
                                    </a>
                </li>
                <li>
                    <a href="typography.html">
                                      <i className="fa fa-font"></i>
                                      <span className="link-title">
                                    Typography
                                  </span>  </a>
                </li>
                <li>
                    <a href="maps.html">
                                      <i className="fa fa-map-marker"></i><span className="link-title">
                                    Maps
                                  </span>
                                    </a>
                </li>
                <li>
                    <a href="chart.html">
                                      <i className="fa fa fa-bar-chart-o"></i>
                                      <span className="link-title">
                                    Charts
                                  </span>
                                    </a>
                </li>
                <li>
                    <a href="calendar.html">
                                      <i className="fa fa-calendar"></i>
                                      <span className="link-title">
                                    Calendar
                                  </span>
                                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                                      <i className="fa fa-exclamation-triangle"></i>
                                      <span className="link-title">
                                      Error Pages
                                    </span>
                                      <span className="fa arrow"></span>
                                    </a>
                    <ul className="collapse">
                        <li>
                            <a href="403.html">
                                          <i className="fa fa-angle-right"></i>&nbsp;403</a>
                        </li>
                        <li>
                            <a href="404.html">
                                          <i className="fa fa-angle-right"></i>&nbsp;404</a>
                        </li>
                        <li>
                            <a href="405.html">
                                          <i className="fa fa-angle-right"></i>&nbsp;405</a>
                        </li>
                        <li>
                            <a href="500.html">
                                          <i className="fa fa-angle-right"></i>&nbsp;500</a>
                        </li>
                        <li>
                            <a href="503.html">
                                          <i className="fa fa-angle-right"></i>&nbsp;503</a>
                        </li>
                        <li>
                            <a href="offline.html">
                                          <i className="fa fa-angle-right"></i>&nbsp;offline</a>
                        </li>
                        <li>
                            <a href="countdown.html">
                                          <i className="fa fa-angle-right"></i>&nbsp;Under Construction</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="grid.html">
                                      <i className="fa fa-columns"></i>
                                      <span className="link-title">
                            Grid
                            </span>
                                    </a>
                </li>
                <li>
                    <a href="blank.html">
                                      <i className="fa fa-square-o"></i>
                                      <span className="link-title">
                            Blank Page
                            </span>
                                    </a>
                </li>
                <li className="nav-divider"></li>
                <li>
                    <a href="login.html">
                                      <i className="fa fa-sign-in"></i>
                                      <span className="link-title">
                            Login Page
                            </span>
                                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                                      <i className="fa fa-code"></i>
                                      <span className="link-title">
                              Unlimited Level Menu
                              </span>
                                      <span className="fa arrow"></span>
                                    </a>
                    <ul className="collapse">
                        <li>
                            <a href="javascript:;">Level 1  <span className="fa arrow"></span>  </a>
                            <ul className="collapse">
                                <li> <a href="javascript:;">Level 2</a> </li>
                                <li> <a href="javascript:;">Level 2</a> </li>
                                <li>
                                    <a href="javascript:;">Level 2  <span className="fa arrow"></span>  </a>
                                    <ul className="collapse">
                                        <li> <a href="javascript:;">Level 3</a> </li>
                                        <li> <a href="javascript:;">Level 3</a> </li>
                                        <li>
                                            <a href="javascript:;">Level 3  <span className="fa arrow"></span>  </a>
                                            <ul className="collapse">
                                                <li> <a href="javascript:;">Level 4</a> </li>
                                                <li> <a href="javascript:;">Level 4</a> </li>
                                                <li>
                                                    <a href="javascript:;">Level 4  <span className="fa arrow"></span>  </a>
                                                    <ul className="collapse">
                                                        <li> <a href="javascript:;">Level 5</a> </li>
                                                        <li> <a href="javascript:;">Level 5</a> </li>
                                                        <li> <a href="javascript:;">Level 5</a> </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li> <a href="javascript:;">Level 4</a> </li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:;">Level 2</a> </li>
                            </ul>
                        </li>
                        <li> <a href="javascript:;">Level 1</a> </li>
                        <li>
                            <a href="javascript:;">Level 1  <span className="fa arrow"></span>  </a>
                            <ul className="collapse">
                                <li> <a href="javascript:;">Level 2</a> </li>
                                <li> <a href="javascript:;">Level 2</a> </li>
                                <li> <a href="javascript:;">Level 2</a> </li>
                            </ul>
                        </li>
                    </ul>
                </li>

              */}
            </ul>
            
        </div>
     
       );
	}
}