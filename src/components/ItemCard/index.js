import React from "react";
import { Card, Button } from "react-bootstrap";
import "./index.scss";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "default",
    };
  }
  render() {
    const {item} = this.props;
    return (
      <Card className="card-wrapper text-center">
        <Card.Header className="card-header">
          <Button className="header-button" variant="danger">
            x
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.shortInfo}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ItemCard;
