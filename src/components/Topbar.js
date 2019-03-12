import React from "react";
//import { NavLink } from "react-router-dom";
import "../css/main.css";
import "../css/mobile.css";

class Topbar extends React.Component {
  componentDidMount() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
      // is Google Chrome on IOS
    } else if (
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isOpera === false &&
      isIEedge === false
    ) {
      // is Google Chrome
    } else {
      // not Google Chrome
    }
  }

  render() {
    return (
      <div className="topbar">
        <a
          className="twitter"
          href="https://twitter.com/AmaxLeather"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="fb"
          href="https://www.facebook.com/amaxleather"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="pinterest"
          href="https://www.pinterest.com/amaxleather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="insta"
          href="https://www.instagram.com/amaxleather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
      </div>
    );
  }
}

export default Topbar;
