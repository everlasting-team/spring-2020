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
      data: null,
      isLoading: false,
      error: null,
    };
  }

  getData = () => {
    axios
      .get("/tz20/list.json")
      .then((res) => {
        return map(res.data.data, (item) => {
          return {
            id: item.id,
            name: item.name,
            shortInfo: item.shortInfo,
            more: item.more,
            type: 'default',
            deleted: false,
            deletedDate: null
          };
        });
      })
      .then((res) => {
        this.setState({ data: res, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.getData();
  }

  handleButtonClick = () => {};

  onCardClick = () => {};

  render() {
    const { data } = this.state;
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
