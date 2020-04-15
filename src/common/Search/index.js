import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
class Search extends React.Component {
  render() {
    const { handleClick, handleChange } = this.props;
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            onChange={handleChange}
            placeholder="Search..."
            aria-label="search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleClick}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
