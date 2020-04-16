import React from "react";
import Input from "./../../common/Input";
import "./index.scss";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleSearchInputChange = (e) => {
    this.setState({searchValue: e.target.value});
  };

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
