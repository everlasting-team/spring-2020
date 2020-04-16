import React from "react";
import Input from "./../../common/Input";
import axios from "axios";
import "./index.scss";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      cards: null,
      isLoading: false,
      error: null,
    };
  }

  handleSearchInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  getCardsData = () => {
    axios
      .get("/tz20/list.json")
      .then((res) => {
        return res.data.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            shortInfo: item.shortInfo,
            more: item.more,
            type: "default",
            deleted: false,
            deletedDate: null,
          };
        });
      })
      .then((res) => {
        this.setState({ cards: res, isLoading: false });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.getCardsData();
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="left-nav-wrapper">
        <Input
          placeholder="Search..."
          value={searchValue}
          name="searchInput"
          handleChange={this.handleSearchInputChange}
        />
      </div>
    );
  }
}

export default LeftNav;
