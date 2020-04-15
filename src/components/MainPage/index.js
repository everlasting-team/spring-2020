import React from "react";
import CardPage from "./../CardPage";
import FilterPage from "./../FilterPage";
import axios from "axios";
import "./index.scss";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <FilterPage />
        <CardPage />
      </div>
    );
  }
}

export default MainPage;
