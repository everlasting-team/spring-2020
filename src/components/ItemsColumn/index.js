import React from "react";
import { map } from "lodash";
import ItemCard from "./../ItemCard";
import axios from "axios";
import { API_URL } from "./../../config";
import "./index.scss";
import { RESPONSE } from "./../../constants";

class ItemsColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "default",
      data: null
    };
  }

  componentDidMount() {
    axios
      .get('/tz20/list.json')
      .then(function (response) {
        console.log(response.data)
        this.setState({data: response.data.data});
        console.log('hah');
        console.log(this.state)
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {
        // always executed
      });
  }

  handleButtonClick = () => {};

  onCardClick = () => {};

  render() {
    const { data } = this.state;
    console.log(this.state);
    return (
      <div className="items-column-wrapper">
        {map(data, (item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default ItemsColumn;
