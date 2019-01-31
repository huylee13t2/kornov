/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Jobseekers, Recruiters } from "../components/register";
import {
  Paper,
  Tabs,
  Tab,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  indicator: {
    backgroundColor: '#45bb93',
  },
})

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      username: "",
      password: ""
    };
  }

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  render() {
    const { tabIndex } = this.state;
    const { classes } = this.props;

    return (
      <div className="login">
        <div className="container">
          <div className="title">
            <h3>
              Recruitify<span>.com</span>
            </h3>
          </div>

          <div className="actionTab">
            <Paper square>
              <Tabs
                // indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                value={tabIndex}
                onChange={this.handleChange}
                classes={{
                  indicator: classes.indicator
                }}>
              >
                <Tab
                  label="Jobseekers"
                  className={tabIndex === 0 ? "active bg-green" : ""}
                />
                <Tab
                  label="Recruiters"
                  className={tabIndex === 1 ? "active bg-green" : ""}
                />
              </Tabs>
            </Paper>
          </div>

          <div className="content">
            <div className="content-login">
              <h3 className="title-form">Login Here</h3>

              <div className="form-login">
                <TextField
                  label="Usename"
                  fullWidth
                  className="text-field"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
                  margin="normal"
                />
                <TextField
                  label="Password"
                  fullWidth
                  type="password"
                  className="text-field"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  margin="normal"
                />

                <div className="action">
                  <Button className="btn-login bg-green" variant="contained">
                    <Link to="/home">Login</Link>
                  </Button>

                  <Button
                    className="btn-login-linkedin bg-blue"
                    variant="contained"
                    color="primary"
                  >
                    <Icon className="icon-btn">
                      <i className="fab fa-linkedin" />
                    </Icon>
                    Login with Linkedin
                    {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  </Button>

                  <div className="forgot-pass">
                    <a href="">Lost your password?</a>
                  </div>
                </div>
              </div>

              <div className="bottom-login">
                <p>
                  Please write to us -{" "}
                  <a href="" className="email-contact">
                    info@companyname.com
                  </a>{" "}
                  if you face any issuesin posting jobs on the site
                </p>
              </div>
            </div>

            <div className="content-register">
              {tabIndex === 0 && (
                <TabContainer>
                  <Jobseekers />
                </TabContainer>
              )}
              {tabIndex === 1 && (
                <TabContainer>
                  <Recruiters />
                </TabContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
