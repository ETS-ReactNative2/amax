import React from "react";
import axios from "axios";

const apibase = "https://clients.alexander-kim.com/amax/wp-json/wp/v2";
class CollectionList extends React.Component {
  state = {
    data: [],
    loading: true
  };
  componentWillMount() {
    axios
      .get(
        `${apibase}/collection?furnituretype=${this.props.dataId}&per_page=100`
      )
      .then(data => {
        this.setState({
          data: data.data,
          loading: false
        });
      });
  }
  render() {
    return (
      <div className="collectionList">
        {this.state.data &&
          this.state.data.map(item => (
            <div key={item.id}>
              <p />
              <div className="collectionNode">
                <p className="collectionName">{item.title.rendered}</p>
                <div className="image">
                  <div className="imageContainer">
                    <img
                      src={item.acf.image.sizes.large}
                      alt={item.title.rendered}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default CollectionList;
