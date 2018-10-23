import React from "react";
import "../../css/main.css";
import axios from "axios";

const apibase = "http://clients.alexander-kim.com/amax/wp-json/wp/v2";
class Retailers extends React.Component {
  state = {
    page: 0,
    country: "unselected",
    state: "unselected",
    data: []
  };
  componentDidMount() {
    axios.get(`${apibase}/retailers`).then(data => {
      this.setState({
        data: data.data
      });
    });
  }
  nextpage = () => {
    this.setState({
      page: this.state.page + 1
    });
  };
  prevpage = () => {
    this.setState({
      page: this.state.page - 1
    });
  };
  renderStates = retailers => {
    return retailers
      .filter(state => (state.acf.country = "United States"))
      .filter((item, index, inputArray) => {
        return inputArray.indexOf(item) === index;
      })
      .map(item => <p>{item.acf.store_state}</p>);
  };

  render() {
    let position = {
      marginLeft: this.state.page * -100 + "%"
    };
    return (
      <div
        id="retailerswindow"
        className={this.props.open ? "retailers" : "retailers inactive"}
      >
        {console.log(this.state)}
        <div className="container" id="retailercontainer" style={position}>
          <div id="countries">
            <div id="usa" className="country">
              <h2 onClick={this.nextpage}>UNITED STATES</h2>
            </div>
            <div id="canada" className="country">
              <h2>CANADA</h2>
            </div>
          </div>
          <div id="state">
            <div className="name">
              <div className="back" onClick={this.prevpage} />
              <h2> UNITED STATES</h2>
            </div>
            <div className="list">{this.renderStates}</div>
            {console.log(
              this.state.data.filter(
                state => (state.acf.country = "United States")
              )
            )}
          </div>
          <div id="location">
            <div className="name">
              <div className="back" onClick={this.prevpage} />
              <h2 id="selected-state">CALIFORNIA</h2>
            </div>
            <ul className="list">
              <li>
                <p>
                  <b>Furniture and Mattress Warehouse</b> - 2250 E Alessandro
                  Blvd Riverside, CA 92508 (951) 656-7068
                </p>
              </li>
              <li>
                <p>
                  <b>Joel Jones Furniture</b> - 11010 E Foothill Blvd Rancho
                  Cucamonga, CA 91730 (909) 941-8393
                </p>
              </li>
              <li>
                <p>
                  <b>Ontario Furniture</b> - 735 N Milliken Ave Ontario, CA
                  91764 (909) 948-8881
                </p>
              </li>
              <li>
                <p>
                  <b>JEM Furniture Liquidators</b> - 2236 S Vineyard Avenue
                  Ontario, CA 91761 (909) 923-7474
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div id="close-retailer" onClick={this.props.retailers} />
      </div>
    );
  }
}

export default Retailers;
