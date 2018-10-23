import React from "react";
import "../css/main.css";

class Contact extends React.Component {
  render() {
    return (
      <div
        className={this.props.open ? "contact" : "contact inactive"}
        id="contactwindow"
      >
        <div className="container">
          <div className="left">
            <div className="logo" />
            <h2>We're always here to help! Lets chat!</h2>
            <div className="rows">
              <div className="row">
                <p className="formtitle">NAME</p>
                <input type="text" name="name" />
                <p className="formtitle">ORGANIZATION</p>
                <input type="text" name="organization" />
              </div>
              <div className="row">
                <p className="formtitle">EMAIL</p>
                <input type="text" name="email" />
                <p className="formtitle">PHONE</p>
                <input type="text" name="phone" />
              </div>
            </div>
            <p className="formtitle">MESSAGE</p>
            <textarea type="text" name="message" className="messagefield" />
            <div className="button">SEND</div>
          </div>
          <div className="divLine" />
          <div className="right">
            <p className="title">EMAIL</p>
            <p>info@amaxleather.com</p>
            <p>sales@amaxleather.com</p>
            <p className="title">FAX</p>
            <p>1 844 526 5659</p>
            <p className="title">PHONE</p>
            <p>1 909 931 3866 (US)</p>
            <p>1 604 526 5685 (Canada)</p>
            <p className="title">ADDRESSES</p>
            <p>5400 G St. Chino, CA 91710 (US)</p>
            <p>#288 - 12899 76 Ave, Surrey, BC V3W 1E6 (Canada)</p>
          </div>
          <div id="close-contact" onClick={this.props.contact} />
        </div>
      </div>
    );
  }
}

export default Contact;
