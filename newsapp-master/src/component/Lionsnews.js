import React, { Component } from "react";
import Lion from "./lion2.png";

export class Lionsnews extends Component {
  render() {
    return (
      <div>
        <img src={Lion} alt={Lion} style={{ width: "80px", height: "50px" }} />
      </div>
    );
  }
}

export default Lionsnews;
