import React from "react";
import { Link } from "react-router-dom";

export default class Lanepage extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/login">Login Page</Link>
        </p>
        <p>
          <Link to="/home">Home</Link>
        </p>
      </div>
    );
  }
}
