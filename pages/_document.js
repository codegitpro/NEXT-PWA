import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      
       <html lang="en">
       <Head>
         {/* <!-- Favicon icon --> */}
         <link rel="icon" href="/static/assets/images/favicon.ico" type="image/x-icon" />
          {/* <!-- Google font--> */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800" rel="stylesheet" />
          {/* <!-- Required Fremwork --> */}
          <link rel="stylesheet" type="text/css" href="/static/bower_components/bootstrap/css/bootstrap.min.css" />
          {/* <!-- themify-icons line icon --> */}
          <link rel="stylesheet" type="text/css" href="/static/assets/icon/themify-icons/themify-icons.css" />
          {/* <!-- ico font --> */}
          <link rel="stylesheet" type="text/css" href="/static/assets/icon/icofont/css/icofont.css" />
          {/* <!-- Style.css --> */}
          <link rel="stylesheet" type="text/css" href="/static/assets/css/style.css" />

          <link rel="stylesheet" type="text/css" href="/static/assets/icon/feather/css/feather.css" />
          <link rel="stylesheet" type="text/css" href="/static/assets/pages/notification/notification.css"></link>
          <link rel="stylesheet" type="text/css" href="/static/assets/css/jquery.mCustomScrollbar.css" />
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}

export default MyDocument