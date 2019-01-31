/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

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
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  indicator: {
    backgroundColor: "#33464d"
  },
  activeTab: {
    backgroundColor: "#33464d"
  }
});

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.props.changeTab(value);
  };

  render() {
    const { classes, tabIndex } = this.props;

    return (
      <div className="banner bg-black">
        <div className="container">
          <div className={classes.root}>
            <AppBar
              position="static"
              color="default"
              className="bg-black banner-content"
            >
              <Tabs
                value={tabIndex}
                onChange={this.handleChange}
                variant="scrollable"
                scrollButtons="on"
                textColor="primary"
                variant="fullWidth"
                classes={{
                  indicator: classes.indicator
                }}
              >
                >
                <Tab
                  className={tabIndex === 0 ? "activeTab" : ""}
                  label="Resume"
                  icon={<img src="./assets/images/resume.png" width={30} />}
                />
                <Tab
                  className={tabIndex === 1 ? "activeTab" : ""}
                  label="Personal Info"
                  icon={<img src="./assets/images/personal-info.png" width={30} />}
                />
                <Tab
                  className={tabIndex === 2 ? "activeTab" : ""}
                  label="Skills"
                  icon={<img src="./assets/images/skills.png" width={30} />}
                />
                <Tab
                  className={tabIndex === 3 ? "activeTab" : ""}
                  label="Professional Info"
                  icon={<img src="./assets/images/professional-info.png" width={30} />}
                />
                <Tab
                  className={tabIndex === 4 ? "activeTab" : ""}
                  label="Eligiblity"
                  icon={<img src="./assets/images/eligibility.png" width={30} />}
                />
                <Tab
                  className={tabIndex === 5 ? "activeTab" : ""}
                  label="Other Detail"
                  icon={<img src="./assets/images/other-detail.png" width={30} />}
                />
              </Tabs>
            </AppBar>
          </div>
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
