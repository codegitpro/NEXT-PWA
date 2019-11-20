import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

  handleLogout = () => {
    Router.push("/");
  }

  render () {
    console.log("starter render");
    return (
      <React.Fragment>
        <Head>
          <link rel="icon" href="../static/assets/images/favicon.ico" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="../static/bower_components/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="../static/assets/icon/themify-icons/themify-icons.css" />
          <link rel="stylesheet" type="text/css" href="../static/assets/icon/icofont/css/icofont.css" />
          <link rel="stylesheet" type="text/css" href="../static/assets/icon/feather/css/feather.css" />
          <link rel="stylesheet" type="text/css" href="../static/assets/css/style.css" />
          <link rel="stylesheet" type="text/css" href="../static/assets/css/jquery.mCustomScrollbar.css" />

          <script type="text/javascript" src="../static/bower_components/jquery/js/jquery.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/jquery-ui/js/jquery-ui.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/popper.js/js/popper.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/bootstrap/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/jquery-slimscroll/js/jquery.slimscroll.js"></script>
          <script type="text/javascript" src="../static/bower_components/modernizr/js/modernizr.js"></script>
          <script type="text/javascript" src="../static/bower_components/modernizr/js/css-scrollbars.js"></script>
          <script type="text/javascript" src="../static/bower_components/i18next/js/i18next.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/i18next-xhr-backend/js/i18nextXHRBackend.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/i18next-browser-languagedetector/js/i18nextBrowserLanguageDetector.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/jquery-i18next/js/jquery-i18next.min.js"></script>
          <script src="../static/assets/js/pcoded.min.js"></script>
          <script src="../static/assets/js/vartical-layout.min.js"></script>
          <script src="../static/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
          <script type="text/javascript" src="../static/assets/js/script.js"></script>
          <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
          
        </Head>

        {/* <!-- Pre-loader start --> */}
        {/* <div className="theme-loader">
          <div className="ball-scale">
            <div className='contain'>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
              <div className="ring">
                <div className="frame"></div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Pre-loader end --> */}
        <div id="pcoded" className="pcoded">
          <div className="pcoded-overlay-box"></div>
          <div className="pcoded-container navbar-wrapper">
            <nav className="navbar header-navbar pcoded-header">
              <div className="navbar-wrapper">

                  <div className="navbar-logo">
                      <a className="mobile-menu" id="mobile-collapse" href="#!">
                          <i className="feather icon-menu"></i>
                      </a>
                      {/* <a href="index-1.htm"> */}
                          {/* <img className="img-fluid" src="../static/assets/images/logo.png" alt="Theme-Logo" /> */}
                        <Link href="/starter">
                            Test
                        </Link>
                      {/* </a> */}
                      <a className="mobile-options">
                          <i className="feather icon-more-horizontal"></i>
                      </a>
                  </div>

                  <div className="navbar-container container-fluid">
                      {/* <ul className="nav-left">
                          <li className="header-search">
                              <div className="main-search morphsearch-search">
                                  <div className="input-group">
                                      <span className="input-group-addon search-close"><i className="feather icon-x"></i></span>
                                      <input type="text" className="form-control" />
                                      <span className="input-group-addon search-btn"><i className="feather icon-search"></i></span>
                                  </div>
                              </div>
                          </li>
                      </ul> */}
                      <ul className="nav-right">
                          <li className="header-notification">
                              <div className="dropdown-primary dropdown">
                                  <div className="dropdown-toggle" data-toggle="dropdown">
                                      <i className="feather icon-bell"></i>
                                      <span className="badge bg-c-pink">5</span>
                                  </div>
                                  <ul className="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                      <li>
                                          <h6>Notifications</h6>
                                          <label className="label label-danger">New</label>
                                      </li>
                                      <li>
                                          <div className="media">
                                              <img className="d-flex align-self-center img-radius" src="../static/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                              <div className="media-body">
                                                  <h5 className="notification-user">John Doe</h5>
                                                  <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                  <span className="notification-time">30 minutes ago</span>
                                              </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="media">
                                              <img className="d-flex align-self-center img-radius" src="../static/assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                                              <div className="media-body">
                                                  <h5 className="notification-user">Joseph William</h5>
                                                  <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                  <span className="notification-time">30 minutes ago</span>
                                              </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="media">
                                              <img className="d-flex align-self-center img-radius" src="../static/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                              <div className="media-body">
                                                  <h5 className="notification-user">Sara Soudein</h5>
                                                  <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                  <span className="notification-time">30 minutes ago</span>
                                              </div>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          {/* <li className="header-notification">
                              <div className="dropdown-primary dropdown">
                                  <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                                      <i className="feather icon-message-square"></i>
                                      <span className="badge bg-c-green">3</span>
                                  </div>
                              </div>
                          </li> */}
                          <li className="user-profile header-notification">
                              <div className="dropdown-primary dropdown">
                                  <div className="dropdown-toggle" data-toggle="dropdown">
                                      <img src="../static/assets/images/avatar-4.jpg" className="img-radius" alt="User-Profile-Image" />
                                      <span>John Doe</span>
                                      <i className="feather icon-chevron-down"></i>
                                  </div>
                                  <ul className="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                      {/* <li>
                                          <a href="#!">
                                              <i className="feather icon-settings"></i> Settings
                                          </a>
                                      </li>
                                      <li>
                                          <a href="user-profile.htm">
                                              <i className="feather icon-user"></i> Profile
                                          </a>
                                      </li>
                                      <li>
                                          <a href="email-inbox.htm">
                                              <i className="feather icon-mail"></i> My Messages
                                          </a>
                                      </li>
                                      <li>
                                          <a href="auth-lock-screen.htm">
                                              <i className="feather icon-lock"></i> Lock Screen
                                          </a>
                                      </li> */}
                                      <li>
                                          <a onClick={this.handleLogout}>
                                              <i className="feather icon-log-out"></i> Logout
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
            </nav>
            
            {/* <!-- Sidebar chat start --> */}
            <div id="sidebar" className="users p-chat-user showChat">
              <div className="had-container">
                <div className="card card_main p-fixed users-main">
                  <div className="user-box">
                    <div className="chat-inner-header">
                      <div className="back_chatBox">
                        <div className="right-icon-control">
                          <input type="text" className="form-control  search-text" placeholder="Search Friend" id="search-friends" />
                          <div className="form-icon">
                            <i className="icofont icofont-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-friend-list">
                      <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                        <a className="media-left" href="#!">
                          <img className="media-object img-radius img-radius" src="../static/assets/images/avatar-3.jpg" alt="Generic placeholder image " />
                          <div className="live-status bg-success"></div>
                        </a>
                        <div className="media-body">
                          <div className="f-13 chat-header">Josephin Doe</div>
                        </div>
                      </div>
                      <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe" data-toggle="tooltip" data-placement="left" title="Lary Doe">
                        <a className="media-left" href="#!">
                          <img className="media-object img-radius" src="../static/assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                          <div className="live-status bg-success"></div>
                        </a>
                        <div className="media-body">
                            <div className="f-13 chat-header">Lary Doe</div>
                        </div>
                      </div>
                      <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                        <a className="media-left" href="#!">
                            <img className="media-object img-radius" src="../static/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                            <div className="live-status bg-success"></div>
                        </a>
                        <div className="media-body">
                            <div className="f-13 chat-header">Alice</div>
                        </div>
                      </div>
                      <div className="media userlist-box" data-id="4" data-status="online" data-username="Alia" data-toggle="tooltip" data-placement="left" title="Alia">
                        <a className="media-left" href="#!">
                            <img className="media-object img-radius" src="../static/assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                            <div className="live-status bg-success"></div>
                        </a>
                        <div className="media-body">
                            <div className="f-13 chat-header">Alia</div>
                        </div>
                      </div>
                      <div className="media userlist-box" data-id="5" data-status="online" data-username="Suzen" data-toggle="tooltip" data-placement="left" title="Suzen">
                        <a className="media-left" href="#!">
                            <img className="media-object img-radius" src="../static/assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                            <div className="live-status bg-success"></div>
                        </a>
                        <div className="media-body">
                            <div className="f-13 chat-header">Suzen</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sidebar inner chat start--> */}
            <div className="showChat_inner">
              <div className="media chat-inner-header">
                  <a className="back_chatBox">
                      <i className="feather icon-chevron-left"></i> Josephin Doe
                  </a>
              </div>
              <div className="media chat-messages">
                  <a className="media-left photo-table" href="#!">
                      <img className="media-object img-radius img-radius m-t-5" src="../static/assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                  </a>
                  <div className="media-body chat-menu-content">
                      <div className="">
                          <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                          <p className="chat-time">8:20 a.m.</p>
                      </div>
                  </div>
              </div>
              <div className="media chat-messages">
                  <div className="media-body chat-menu-reply">
                      <div className="">
                          <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                          <p className="chat-time">8:20 a.m.</p>
                      </div>
                  </div>
                  <div className="media-right photo-table">
                      <a href="#!">
                          <img className="media-object img-radius img-radius m-t-5" src="../static/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                      </a>
                  </div>
              </div>
              <div className="chat-reply-box p-b-20">
                  <div className="right-icon-control">
                      <input type="text" className="form-control search-text" placeholder="Share Your Thoughts" />
                      <div className="form-icon">
                          <i className="feather icon-navigation"></i>
                      </div>
                  </div>
              </div>
            </div>
            {/* <!-- Sidebar inner chat end--> */}
            <div className="pcoded-main-container">
              <div className="pcoded-wrapper">
                <nav className="pcoded-navbar">
                    <div className="pcoded-inner-navbar main-menu">
                        <div className="pcoded-navigatio-lavel">Navigation</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="pcoded-hasmenu">
                                <a style={{cursor: "pointer"}}>
                                    <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                    <span className="pcoded-mtext">Product</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                      <Link href="/product-all">
                                        <a>
                                            <span className="pcoded-mtext">All</span> 
                                        </a>
                                      </Link>
                                    </li>
                                    <li className="">
                                        <a href="dashboard-crm.htm">
                                            <span className="pcoded-mtext">Available</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pcoded-hasmenu">
                                <a style={{cursor: "pointer"}}>
                                    <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                                    <span className="pcoded-mtext">Order</span>
                                    {/* <span className="pcoded-badge label label-warning">NEW</span> */}
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a href="menu-bottom.htm">
                                            <span className="pcoded-mtext">All</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="box-layout.htm" target="_blank">
                                            <span className="pcoded-mtext">Pending</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="box-layout.htm" target="_blank">
                                            <span className="pcoded-mtext">Complete</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <Link href="/bank-details">
                                    <a>
                                        <span className="pcoded-micon"><i className="feather icon-watch"></i></span>
                                        <span className="pcoded-mtext">Bank Details</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="pcoded-content">
                  <div className="pcoded-inner-content">
                  {/* <!-- Main-body start --> */}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/* <!-- Page-header start --> */}
                                <div className="page-header">
                                    <div className="row align-items-end">
                                        <div className="col-lg-8">
                                            <div className="page-header-title">
                                                <div className="d-inline">
                                                    <h4>Product Tables</h4>
                                                    {/* <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-4">
                                            <div className="page-header-breadcrumb">
                                                <ul className="breadcrumb-title">
                                                    <li className="breadcrumb-item">
                                                        <a href="index-1.htm"> <i className="feather icon-home"></i> </a>
                                                    </li>
                                                    <li className="breadcrumb-item"><a href="#!">Bootstrap Table</a>
                                                    </li>
                                                    <li className="breadcrumb-item"><a href="#!">Basic Table</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <!-- Page-header end --> */}

                                    {/* <!-- Page-body start --> */}
                                    <div className="page-body">
                                        {/* <!-- Basic table card start --> */}
                                        <div className="card">
                                            <div className="card-block table-border-style">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>First Name</th>
                                                                <th>Last Name</th>
                                                                <th>Username</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Basic table card end --> */}

                                    </div>
                                    {/* <!-- Page-body end --> */}
                                </div>
                            </div>
                            {/* <!-- Main-body end --> */}

                            <div id="styleSelector">

                            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products
