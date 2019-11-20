import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import serverUrl from '../setting';

class BankDetails extends React.Component {
    constructor(props) {
        super(props);
// console.log(props);
        // this.state = {
        //     accountHolderName: props.shows.data.account_holder_name,
        //     accountNumber: `********${props.shows.data.account_number}`,
        //     accountHolderType: props.shows.data.account_holder_type,
        //     isVerified: props.shows.data.is_verified,
        //     routingNumber: props.shows.data.routing_number,
        //     firstName: props.shows.data.first_name,
        //     lastName: props.shows.data.last_name,
        //     email: props.shows.data.email,
        //     dob: props.shows.data.dob,
        //     addressLine1: props.shows.data.address_line1,
        //     city: props.shows.data.city,
        //     state: props.shows.data.state,
        //     postalCode: props.shows.data.postal_code,
        //     user_id: props.shows.data.user_id,
        //     identityImg: props.shows.data.identity_img,
        //     ssn: '',
        // }
        this.state = {
            accountHolderName: "",
            accountNumber: "",
            accountHolderType: "",
            isVerified: "",
            routingNumber: "",
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            addressLine1: "",
            city: "",
            state: "",
            postalCode: "",
            user_id: "",
            identityImg: "",
            ssn: '',
        }
    }

    // async componentDidMount() {
    //     const response = await axios.post(`${serverUrl}/api/order/get-bank-details`, {user_id: 226});
    //     console.log(response);
    // }

    // static async getInitialProps() {
    //     // console.log("asdf");
    //     try {
    //         const response = await axios.post(`${serverUrl}/api/order/get-bank-details`, {user_id: 226});
    //         // console.log(response);
    //         return {
    //             shows: response.data
    //         }
    //     } catch (error) {
    //         // console.log("error", JSON.stringify(error));
    //         return {
    //             shows: JSON.stringify(error)
    //         }
    //     }

    // }

    handleLogout = () => {
        Router.push("/");
    }

    gotoPage = (path) => {
        Router.push(path);
    }

    handleSave = async () => {
        const {
            accountHolderName, 
            accountNumber,
            routingNumber,
            firstName,
            lastName,
            dob,
            email,
            addressLine1,
            city,
            state,
            postalCode,
            user_id,
            identityImg,
            ssn,
            accountHolderType
        } = this.state;

        const params = { 
            user_id: user_id,
            account_holder_name: accountHolderName,
            account_number: accountNumber,
            routing_number: routingNumber,
            account_holder_type: accountHolderType,
            first_name: firstName,
            last_name: lastName,
            email: email,
            address_line1: addressLine1,
            postal_code: postalCode,
            state: state,
            city: city,
            ssn: ssn,
            dob: dob,
            identity_img: identityImg 
        };
// console.log(params);
        try {
            const response = await axios.post(`${serverUrl}/api/order/add-bank-details`, params);
            // console.log(response);
            if(response.data.status === 1) {
                notify('top', 'center', 'fa fa-comments', 'success', 'animated fadeInUp', 'animated fadeOutUp', response.data.message)
            } else {
                notify('top', 'center', 'fa fa-comments', 'warning', 'animated fadeInUp', 'animated fadeOutUp', response.data.message)
            }
        } catch (error) {
            console.log("error", JSON.stringify(error));
            return {
                shows: JSON.stringify(error)
            }
        }
    }

  render () {
        const {
            accountHolderName, 
            accountNumber,
            routingNumber,
            firstName,
            lastName,
            dob,
            email,
            addressLine1,
            city,
            state,
            postalCode
        } = this.state;
    return (
      <React.Fragment>
        
<Head>
<script type="text/javascript" src="../static/bower_components/jquery/js/jquery.min.js"></script>
          <script src="../static/assets/js/vartical-layout.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/popper.js/js/popper.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/bootstrap/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/jquery-slimscroll/js/jquery.slimscroll.js"></script>
          <script type="text/javascript" src="../static/bower_components/modernizr/js/modernizr.js"></script>
          <script src="../static/assets/js/pcoded.min.js"></script>
          <script src="../static/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
          <script type="text/javascript" src="../static/assets/js/script.js"></script>
        <script type="text/javascript" src="../static/assets/js/bootstrap-growl.min.js"></script>
        <script type="text/javascript" src="../static/assets/pages/notification/notification.js"></script>
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
                      <a href="/starter">
                          {/* <img className="img-fluid" src="../static/assets/images/logo.png" alt="Theme-Logo" /> */}
                          Test
                      </a>
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
                                    <a style={{cursor:"pointer"}}>
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
                                                    <h4>Bank details</h4>
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
                                            <div className="card-block">
                                                <form id="main" method="post" action="/" noValidate="">
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Account Holder Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={accountHolderName} onChange={(e) => {this.setState({accountHolderName: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Account Number</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={accountNumber} onChange={(e) => {this.setState({accountNumber: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Routing Number</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={routingNumber} onChange={(e) => {this.setState({routingNumber: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">First Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={firstName} onChange={(e) => {this.setState({firstName: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Last Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={lastName} onChange={(e) => {this.setState({lastName: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Email</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" className="form-control" id="email" name="email" defaultValue={email} onChange={(e) => {this.setState({email: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">DOB</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={dob} onChange={(e) => {this.setState({dob: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Address Line 1</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={addressLine1} onChange={(e) => {this.setState({addressLine1: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">City</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={city} onChange={(e) => {this.setState({city: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">State</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={state} onChange={(e) => {this.setState({state: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Postal Code</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" className="form-control" name="name" id="name" defaultValue={postalCode} onChange={(e) => {this.setState({postalCode: e.target.value})}} />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-group row">
                                                        <label className="col-sm-2"></label>
                                                        <div className="col-sm-10">
                                                            <button type="button" className="btn btn-primary m-b-0" onClick={this.handleSave}>Save</button>
                                                        </div>
                                                    </div>
                                                </form>
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

export default BankDetails;
