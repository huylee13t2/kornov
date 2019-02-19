import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import {
  Grid,
  Fab,
  Button,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Input,
  Chip
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "auto",
    maxWidth: "100%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium
  };
}

class Eligiblity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cource: "10",
      cource_type: "10",
      name: []
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeSpecial = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeSpecialMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="professional-info eligiblity">
        <div className="professional">
          <h3 className="form-title">Eligiblity</h3>

          <div className="eligiblity-content">
            <Grid container spacing={24}>
              <Grid item sm={6}>
                <TextField
                  select
                  label="Cource"
                  value={this.state.cource}
                  onChange={this.handleChange}
                  margin="normal"
                  name="cource"
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>

                <TextField
                  select
                  label="Cource Type"
                  value={this.state.cource_type}
                  onChange={this.handleChange}
                  margin="normal"
                  name="cource_type"
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>

                <TextField
                  select
                  label="University"
                  value={this.state.cource_type}
                  onChange={this.handleChange}
                  margin="normal"
                  name="cource_type"
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="standard-full-width"
                  label="Year of Passing"
                  placeholder="Year of Passing"
                  fullWidth
                  margin="normal"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                />

                <FormControl fullWidth>
                  <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
                  <Select
                    multiple
                    value={this.state.name}
                    onChange={this.handleChangeSpecial}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                      <div className={classes.chips}>
                        {selected.map(value => (
                          <Chip
                            key={value}
                            label={value}
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                    InputLabelProps={{
                      shrink: true
                    }}
                  >
                    {names.map(name => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, this)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={6}>
                <Fab color="primary" size="medium" title="Add New Company" aria-label="Add">
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </div>
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

Eligiblity.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Eligiblity);
