import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <img
          alt="home-img"
          src={
            this.props.data && this.props.data.acf.home_page_image.sizes.large
          }
        />
        {console.log(this.props)}
      </div>
    );
  }
}

export default Home;
