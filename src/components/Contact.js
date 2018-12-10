import React from "react";
import "../css/main.css";
import * as emailjs from "emailjs-com";

class Contact extends React.Component {
  state = {
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    sendState: 0
  };
  componentDidMount() {
    emailjs.init("user_LW4F13TkKWmYYIdeq1mpg");
  }
  handleTextChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  submitEmail = () => {
    this.setState({
      sendState: 1
    });
    const template = this.state;

    emailjs.send("gmail", "contact", template).then(response => {
      // console.log(response);
      this.setState({ sendState: 2 });
    });
  };

  emailState = () => {
    if (this.state.sendState === 0) {
      return (
        <form className="contactforms" onSubmit={this.submitEmail}>
          <div className="rows">
            <div className="row">
              <p className="formtitle">NAME</p>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleTextChange}
                placeholder="John Doe"
                required
              />
              <p className="formtitle">PHONE</p>
              <input
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleTextChange}
                placeholder="1234567890"
                required
              />
            </div>
            <div className="row">
              <p className="formtitle">EMAIL</p>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleTextChange}
                placeholder="John.Doe@gmail.com"
                required
              />

              <p className="formtitle">SUBJECT</p>
              <input
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.handleTextChange}
                placeholder="John Doe's Furniture Store"
                required
              />
            </div>
          </div>
          <p className="formtitle">MESSAGE</p>
          <textarea
            type="text"
            name="message"
            className="messagefield"
            value={this.state.message}
            onChange={this.handleTextChange}
            required
          />
          <button className="button">SEND</button>
        </form>
      );
    } else if (this.state.sendState === 1) {
      return (
        <div className="contactforms sent">
          <div className="preloader" />
        </div>
      );
    } else {
      return (
        <div className="contactforms sent">
          <div>Message has been sent!</div>
        </div>
      );
    }
  };

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
            {this.emailState()}
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
