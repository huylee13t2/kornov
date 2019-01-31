import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <AppBar className="color-white bg-black" position="static" color="default">
          <Toolbar style={{"textAlign": "center", margin: "0 auto"}}>
            All Right Reserved 2018. www.companyname.com
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Footer;
