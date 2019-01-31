import React from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  Fab,
  MenuItem,
  Checkbox,
  InputLabel,
  Select,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firs_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      status: "",
      dob: new Date(),
      premenent: "",
      temporary: "",
      location: "",
      country: "",
      landline: "",
      mobile: "",
      total_input_phone: 0,
      currency: "EUR",
      annual_salary: 0,
      expected_salary: 0,
      notice_period: 3,
      already_serving: null,
    };
  }

  handleDateChange = date => {
    this.setState({ dob: date });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  addInputPhone = () => {
    this.setState({ total_input_phone: this.state.total_input_phone + 1 });
  };

  renderInputPhone = () => {
    let _el = [];
    for (let i = 0; i < this.state.total_input_phone; i++) {
      _el.push(
        <Grid key={i} item sm={6}>
          <TextField
            label="Phone Number"
            value={this.state.phone_number}
            onChange={e => this.setState({ phone_number: e.target.value })}
            margin="normal"
            placeholder="+91 123 456 789"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      );
    }

    return _el;
  };

  render() {
    return (
      <div className="personal-info">
        <div className="info">
          <h3 className="form-title">Info</h3>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={32}>
              <Grid item sm={4}>
                <TextField
                  label="First Name"
                  value={this.state.firs_name}
                  onChange={e => this.setState({ firs_name: e.target.value })}
                  margin="normal"
                  placeholder="First Name"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  label="Middle Name"
                  value={this.state.middle_name}
                  onChange={e => this.setState({ middle_name: e.target.value })}
                  margin="normal"
                  placeholder="Middle Name"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  label="Last Name"
                  value={this.state.last_name}
                  onChange={e => this.setState({ last_name: e.target.value })}
                  margin="normal"
                  placeholder="Last Name"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item sm={4}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" style={{ margin: 0 }}>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className="gender"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item sm={4}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" style={{ margin: 0 }}>
                    Marital Status
                  </FormLabel>
                  <RadioGroup
                    aria-label="Marital Status"
                    name="marital_status"
                    className="gender"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Single"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Married"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item sm={4}>
                <DatePicker
                  margin="normal"
                  label="DOB"
                  value={this.state.dob}
                  onChange={this.handleDateChange}
                  fullWidth
                  style={{ margin: 0 }}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        </div>

        <div className="contact">
          <h3 className="form-title">Contact Detail</h3>

          <Grid container spacing={32}>
            <Grid item sm={6}>
              <TextField
                label="Premenent"
                value={this.state.premenent}
                onChange={e => this.setState({ premenent: e.target.value })}
                margin="normal"
                placeholder="Premenent"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                label="Temporary"
                value={this.state.temporary}
                onChange={e => this.setState({ temporary: e.target.value })}
                margin="normal"
                placeholder="Temporary"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                label="Location"
                value={this.state.location}
                onChange={e => this.setState({ location: e.target.value })}
                margin="normal"
                placeholder="Location"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                label="Country"
                value={this.state.country}
                onChange={e => this.setState({ country: e.target.value })}
                margin="normal"
                placeholder="Country"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                label="Landline"
                value={this.state.landline}
                onChange={e => this.setState({ landline: e.target.value })}
                margin="normal"
                placeholder="+91 123 456 789"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                label="Mobile"
                value={this.state.mobile}
                onChange={e => this.setState({ mobile: e.target.value })}
                margin="normal"
                placeholder="+91 123 456 789"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            {this.renderInputPhone()}

            {/* add phone number */}
            <Grid item sm={6}>
              <Fab
                color="primary"
                size="medium"
                aria-label="Add"
                onClick={() => this.addInputPhone()}
              >
                <AddIcon />
              </Fab>
              <span className="text-color" style={{ marginLeft: "10px" }}>
                {" "}
                (Add Phone number)
              </span>
            </Grid>
          </Grid>
        </div>

        <div className="salary">
          <h3 className="form-title">Salary Details</h3>

          <Grid container spacing={32}>
            <Grid item sm={4}>
              <Grid container spacing={24}>
                <Grid item sm={4}>
                  <TextField
                    select
                    label="Currency"
                    value={this.state.currency}
                    onChange={this.handleChange("currency")}
                    margin="normal"
                    fullWidth
                  >
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item sm={8}>
                  <TextField
                    type="number"
                    label="Annual Salary"
                    value={this.state.annual_salary}
                    onChange={e =>
                      this.setState({ annual_salary: e.target.value })
                    }
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={4}>
              <Grid container spacing={24}>
                <Grid item sm={4}>
                  <TextField
                    select
                    label="Currency"
                    value={this.state.currency}
                    onChange={this.handleChange("currency")}
                    margin="normal"
                    fullWidth
                  >
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item sm={8}>
                  <TextField
                    type="number"
                    label="Expected Salary"
                    value={this.state.expected_salary}
                    onChange={e =>
                      this.setState({ expected_salary: e.target.value })
                    }
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={4}>
              <FormControlLabel
                style={{ margin: "0", marginTop: "24px" }}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange("checkedB")}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Negotiable"
              />
            </Grid>

            <Grid item sm={6}>
              <Grid container spacing={24}>
                <Grid item sm={5}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">
                      Notice Period *
                    </InputLabel>
                    <Select
                      fullWidth
                      value={this.state.notice_period}
                      onChange={e =>
                        this.setState({ notice_period: e.target.value })
                      }
                      inputProps={{
                        name: "age",
                        id: "age-simple"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={3}>3 Months</MenuItem>
                      <MenuItem value={6}>6 Months</MenuItem>
                      <MenuItem value={9}>9 Months</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={7}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ marginBottom: "0" }}>
                      Notice Period *
                    </FormLabel>
                    <RadioGroup
                      aria-label="Notice Period"
                      name="notice_period"
                      className="gender"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="fixed"
                        control={<Radio color="primary" />}
                        label="Fixed"
                      />
                      <FormControlLabel
                        value="negotiable"
                        control={<Radio color="primary" />}
                        label="Negotiable"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={6}>
              <Grid container spacing={24}>
                <Grid item sm={5}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">How long *</InputLabel>
                    <Select
                      value={this.state.notice_period}
                      onChange={e =>
                        this.setState({ notice_period: e.target.value })
                      }
                      inputProps={{
                        name: "age",
                        id: "age-simple"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={3}>3 Months</MenuItem>
                      <MenuItem value={6}>6 Months</MenuItem>
                      <MenuItem value={9}>9 Months</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={7}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ marginBottom: "0" }}>
                      Already Serving
                    </FormLabel>
                    <RadioGroup
                      aria-label="Notice Period"
                      name="already_serving"
                      className="gender"
                      value={this.state.already_serving}
                      onChange={e => this.setState({ already_serving: e.target.value })}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio color="primary" />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  margin="normal"
                  label="Last day of Working"
                  value={this.state.dob}
                  onChange={this.handleDateChange}
                  fullWidth
                  style={{ margin: 0 }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </div>

        <div className="action">
          <Button className="btn-back">Back</Button>
          <Button className="bg-green color-white btn-save">Save & Next</Button>
          <Button className="btn-skip">Skip</Button>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
