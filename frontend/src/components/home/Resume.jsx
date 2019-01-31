import React from "react";
import { Grid, Avatar, Button } from "@material-ui/core";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <h3 className="title">Upload</h3>

        <div className="content-resume">
          <div className="content-user">
            <Grid container spacing={32}>
              <Grid item xs={3} className="user">
                <Avatar
                  alt="Remy Sharp"
                  src="./assets/images/avt.png"
                  className="avatar"
                />
                <Button variant="outlined">Edit</Button>
              </Grid>
              <Grid item xs={9}>
                <p className="attach">
                  Attach Profile Image (File Format PNG, JEPG)
                </p>
                <Button variant="contained">Choose File</Button>
                <span className="status_input">No File Choose</span>
              </Grid>
            </Grid>
          </div>

          <div className="attach-resume">
            <Grid container spacing={24}>
              <Grid item xs={3}>
                <p className="attach">Attach Resume</p>
                <span>(File Format PDF, Doc, Docs)</span>
              </Grid>
              <Grid item xs={9}>
                <Button variant="contained">Choose File</Button>
                <span className="status_input">No File Choose</span>
                <p className="status_file">
                  Upload New File to Update Existing Resume
                </p>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="action">
          <Button className="btn-back">Back</Button>
          <Button className="bg-green color-white btn-save">
            Save & Next
          </Button>
          <Button className="btn-skip">Skip</Button>
        </div>
      </div>
    );
  }
}

export default Resume;
