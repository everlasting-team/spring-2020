import React from "react";
import Button from "./../Button";
import "./index.scss";

class Card extends React.Component {
  handleCardClick = () => {
    this.props.onCardClick(this.props.value);
  };

  render() {
    const { name, shortInfo } = this.props.value;

    return (
      <div className="card-wrapper" onClick={this.handleCardClick}>
        <div className="card-header">
          <Button />
        </div>
        <div className="card-body">
          <div className="title">{name}</div>
          <div className="description">{shortInfo}</div>
        </div>
      </div>
    );
  }
}

export default Card;
