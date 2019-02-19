import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {
  Banner,
  Resume,
  PersonalInfo,
  Skills,
  ProfessionalInfo,
  Eligiblity,
  OtherDetail
} from "../components/home";

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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 4,
    };
  }

  changeTab = value => {
    this.setState({ tabIndex: value });
  };

  render() {
    const { tabIndex } = this.state;

    return (
      <div className="home-page">
        <Banner tabIndex={tabIndex} changeTab={this.changeTab} />

        <div className="container">
          <div className="content boxShadow">
            {tabIndex === 0 && (
              <TabContainer>
                <Resume />
              </TabContainer>
            )}
            {tabIndex === 1 && (
              <TabContainer>
                <PersonalInfo />
              </TabContainer>
            )}
            {tabIndex === 2 && (
              <TabContainer>
                <Skills />
              </TabContainer>
            )}
            {tabIndex === 3 && (
              <TabContainer>
                <ProfessionalInfo />
              </TabContainer>
            )}
            {tabIndex === 4 && (
              <TabContainer>
                <Eligiblity />
              </TabContainer>
            )}
            {tabIndex === 5 && (
              <TabContainer>
                <OtherDetail />
              </TabContainer>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
