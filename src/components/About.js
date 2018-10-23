import React from "react";
import "../css/about.css";
import renderHTML from "react-render-html";

class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        {console.log(this)}
        <div className="headers top">About</div>
        <div className="line" />
        <div className="content">
          {this.props.data && renderHTML(this.props.data.content.rendered)}
        </div>
      </div>
    );
  }
}

export default About;
