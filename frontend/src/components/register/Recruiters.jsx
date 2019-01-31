import React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";

class Recruiters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      re_password: "",
      company_name: "",
      company: ""
    }
  }

  render(){
    return(
      <div className="jobseekers recruiters">
        <h3>New Recruiters Registration</h3>

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

          <FormControl fullWidth>
            <InputLabel htmlFor="age-simple">Company</InputLabel>
            <Select
              fullWidth
              value={this.state.company}
              onChange={this.handleChange}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Company Name"
              fullWidth
              className="text-field"
              value={this.state.company_name}
              onChange={e => this.setState({ company_name: e.target.value })}
              margin="normal"
            />
          </FormControl>

          <Button
           className="btn-register bg-green"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </div>
      </div>
    )
  }
}

export default Recruiters;