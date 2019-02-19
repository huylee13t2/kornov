import React from "react";
import { Grid, TextField, Chip, Fab, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import AddIcon from "@material-ui/icons/Add";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

class ProfessionalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: "",
      dob: new Date(),
      secondary_skills: [
        {
          key: 0,
          label: "Managin"
        },
        {
          key: 1,
          label: "Team Leader"
        },
        {
          key: 2,
          label: "Project Manager"
        },
        {
          key: 3,
          label: "All in all"
        },
        {
          key: 4,
          label: "Teachnichal"
        }
      ],
      key_secondary: ""
    };
  }

  handleDateChange = date => {
    this.setState({ dob: date });
  };

  addSecondarySkills = value => {
    let { secondary_skills } = this.state;

    let _obj = {
      key: secondary_skills.length,
      label: value
    };

    secondary_skills.push(_obj);
    this.setState({ secondary_skills });
    this.setState({ key_secondary: "" });
  };

  handleDeleteSecondarySkills = data => () => {
    this.setState(state => {
      const secondary_skills = [...state.secondary_skills];
      const chipToDelete = secondary_skills.indexOf(data);
      secondary_skills.splice(chipToDelete, 1);
      return { secondary_skills };
    });
  };

  render() {
    return (
      <div className="professional-info">
        <div className="professional">
          <h3 className="form-title">Professional Details</h3>

          <Grid container spacing={32}>
            <Grid item sm={6}>
              <Grid container spacing={32}>
                <Grid item sm={12}>
                  <TextField
                    label="Organization"
                    fullWidth
                    value={this.state.organization}
                    onChange={e =>
                      this.setState({ organization: e.target.value })
                    }
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    label="Organization"
                    fullWidth
                    multiline
                    rows="3"
                    value={this.state.organization}
                    onChange={e =>
                      this.setState({ organization: e.target.value })
                    }
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>

                <Grid item sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      margin="normal"
                      label="Form Time Period"
                      value={this.state.dob}
                      onChange={this.handleDateChange}
                      fullWidth
                      style={{ margin: 0 }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid item sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      margin="normal"
                      label="To Time Period"
                      value={this.state.dob}
                      onChange={this.handleDateChange}
                      fullWidth
                      style={{ margin: 0 }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={6}>
              <Grid container spacing={32}>
                <Grid item sm={12}>
                  <TextField
                    label="Designation"
                    fullWidth
                    placeholder="Designation"
                    value={this.state.key_secondary}
                    onChange={e =>
                      this.setState({ key_secondary: e.target.value })
                    }
                    onKeyPress={e => {
                      e.key === "Enter" &&
                        this.addSecondarySkills(e.target.value);
                    }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                {this.state.secondary_skills.length > 0 && (
                  <Grid item sm={12}>
                    {this.state.secondary_skills.map(data => {
                      return (
                        <Chip
                          style={{ marginRight: "10px", marginBottom: "10px" }}
                          key={data.key}
                          label={data.label}
                          onDelete={this.handleDeleteSecondarySkills(data)}
                        />
                      );
                    })}
                  </Grid>
                )}
              </Grid>
            </Grid>

            <Grid item sm={6}>
              <Fab color="primary" title="Add New Company" aria-label="Add">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </div>

        <div className="action" style={{ marginTop: 30 }}>
          <Button className="btn-back">Back</Button>
          <Button className="bg-green color-white btn-save">Save & Next</Button>
          <Button className="btn-skip">Skip</Button>
        </div>
      </div>
    );
  }
}

export default ProfessionalInfo;
