import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import {withRouter} from 'next/router';
// import Router from 'next/router'

class index extends React.Component {
  handleLogin = () => {
    console.log("login button is clickecd!!!");
    const {router} = this.props;
    router.push("/starter");
    // Router.push("/starter");
  }

  render() {
    console.log("index render");
    return (
      <React.Fragment>
        
        {/* <!-- Pre-loader start --> */}
        {/* <div className="theme-loader">
          <div className="ball-scale">
            <div className='contain'>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
                <div className="ring"><div className="frame"></div></div>
            </div>
          </div>
        </div> */}
        {/* <!-- Pre-loader end --> */}
        <section className="login-block">
        {/* <!-- Container-fluid starts --> */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {/* <!-- Authentication card start --> */}
                <form className="md-float-material form-material">
                  <div className="auth-box card">
                    <div className="card-block">
                      <div className="row m-b-20">
                        <div className="col-md-12">
                          <h3 className="text-center">Sign In</h3>
                        </div>
                      </div>
                      <div className="form-group form-primary">
                        <input type="text" name="email" className="form-control" required="" placeholder="Your Email Address" />
                        <span className="form-bar"></span>
                      </div>
                      <div className="form-group form-primary">
                        <input type="password" name="password" className="form-control" required="" placeholder="Password" />
                        <span className="form-bar"></span>
                      </div>
                      <div className="row m-t-25 text-left">
                        <div className="col-12">
                          {/* <div className="checkbox-fade fade-in-primary d-">
                            <label>
                              <input type="checkbox" value="" />
                              <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                              <span className="text-inverse">Remember me</span>
                            </label>
                          </div> */}
                          <div className="forgot-phone text-right f-right">
                            <a href="auth-reset-password.htm" className="text-right f-w-600"> Forgot Password?</a>
                          </div>
                        </div>
                      </div>
                      <div className="row m-t-30">
                        <div className="col-md-12">
                          <Link href="/starter">
                            <button type="button" className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">Sign in</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                {/* <!-- end of form --> */}
              </div>
              {/* <!-- end of col-sm-12 --> */}
            </div>
            {/* <!-- end of row --> */}
          </div>
          {/* <!-- end of container-fluid --> */}
        </section>
        
        <script type="text/javascript" src="../static/bower_components/jquery/js/jquery.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/jquery-ui/js/jquery-ui.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/popper.js/js/popper.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/bootstrap/js/bootstrap.min.js"></script>
          {/* <!-- jquery slimscroll js --> */}
          <script type="text/javascript" src="../static/bower_components/jquery-slimscroll/js/jquery.slimscroll.js"></script>
          {/* <!-- modernizr js --> */}
          <script type="text/javascript" src="../static/bower_components/modernizr/js/modernizr.js"></script>
          <script type="text/javascript" src="../static/bower_components/modernizr/js/css-scrollbars.js"></script>
          {/* <!-- i18next.min.js --> */}
          {/* <script type="text/javascript" src="../static/bower_components/i18next/js/i18next.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/i18next-xhr-backend/js/i18nextXHRBackend.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/i18next-browser-languagedetector/js/i18nextBrowserLanguageDetector.min.js"></script>
          <script type="text/javascript" src="../static/bower_components/jquery-i18next/js/jquery-i18next.min.js"></script> */}
          <script type="text/javascript" src="../static/assets/js/common-pages.js"></script>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          {/* <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script> */}
      </React.Fragment>
    )
  }
}

export default withRouter(index)
