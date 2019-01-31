import React from "react";
import {
  TextField,
  Button,
  FormControl,
} from "@material-ui/core";

class Jobseekers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      re_password: "",
      company_name: "",
      company: ""
    };
  }

  render() {
    return (
      <div className="jobseekers">
        <h3>New Registration</h3>

        <div className="jobseekers-content">
          <FormControl fullWidth>
            <TextField
              label="Usename"
              fullWidth
              className="text-field"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
              margin="normal"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Password"
              fullWidth
              className="text-field"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              margin="normal"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Confirm Password"
              fullWidth
              className="text-field"
              type="password"
              value={this.state.re_password}
              onChange={e => this.setState({ re_password: e.target.value })}
              margin="normal"
            />
          </FormControl>

          <Button className="btn-register bg-green" variant="contained" color="primary">
            Register
          </Button>
        </div>
      </div>
    );
  }
}

export default Jobseekers;
