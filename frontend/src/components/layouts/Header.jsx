import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={`${classes.root} header`}>
        <AppBar position="static" className="bg-green">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <a href="/" id="logo">
              <img src="./assets/images/logo.png" alt="Logo"/>
              </a>
            </Typography>
            <Link to="/blog" className="header-links">
              Blog
            </Link>
            <Link to="/blog" className="header-links">
              Contact
            </Link>
            <Link to="/blog" className="header-links">
              Feature
            </Link>
            <Link to="/blog" className="header-links">
              Term & Condition
            </Link>
            <Link to="/login" className="header-links">
              Login
            </Link>
            <Link to="/login" className="header-links">
              Sign Up
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
