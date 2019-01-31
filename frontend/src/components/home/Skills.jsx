import React from "react";
import { Grid, TextField, Chip, Button } from "@material-ui/core";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primary_skills: [],
      secondary_skills: [],
      key_primary: "",
      key_secondary: ""
    };
  }

  addPrimarySkills = value => {
    let { primary_skills } = this.state;

    let _obj = {
      key: primary_skills.length,
      label: value
    };

    primary_skills.push(_obj);
    this.setState({ primary_skills });
    this.setState({ key_primary: "" });
  };

  handleDeletePrimarySkills = data => () => {
    this.setState(state => {
      const primary_skills = [...state.primary_skills];
      const chipToDelete = primary_skills.indexOf(data);
      primary_skills.splice(chipToDelete, 1);
      return { primary_skills };
    });
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
      <div className="skills">
        <h3 className="form-title">Add Skills</h3>

        <div className="content">
          <div className="primary-skills">
            <Grid container spacing={32}>
              <Grid item sm={6}>
                <TextField
                  label="Primary Skills"
                  fullWidth
                  placeholder="Web Designing"
                  value={this.state.key_primary}
                  onChange={e => this.setState({ key_primary: e.target.value })}
                  onKeyPress={e => {
                    e.key === "Enter" && this.addPrimarySkills(e.target.value);
                  }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              {this.state.primary_skills.length > 0 && (
                <Grid item sm={12}>
                  {this.state.primary_skills.map(data => {
                    return (
                      <Chip
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                        key={data.key}
                        label={data.label}
                        onDelete={this.handleDeletePrimarySkills(data)}
                      />
                    );
                  })}
                </Grid>
              )}
            </Grid>
          </div>

          <div className="primary-skills">
            <Grid container spacing={32}>
              <Grid item sm={6}>
                <TextField
                  label="Secondary Skills"
                  fullWidth
                  placeholder="Graphics"
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
          </div>
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

export default Skills;
