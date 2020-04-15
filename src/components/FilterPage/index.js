import React from "react";
import Search from "./../../common/Search";
import ItemsColumn from "./../ItemsColumn";
import "./index.scss";

class FilterPage extends React.Component {
  render() {
    return (
      <div className="filter-page-wrapper">
        <div className="search">
          <Search />
        </div>
        <div className="item-column">
          <ItemsColumn />
        </div>
      </div>
    );
  }
}

export default FilterPage;
