import React from "react";
import Card from "./../../common/Card";
import "./index.scss";

class PostsCards extends React.Component {
  render() {
    const { cards, buttonSettings, onButtonClick, onCardClick } = this.props;

    return (
      <div className="posts-cards-wrapper">
        {cards.map((item) => {
          return (
            <Card
              key={item.id}
              value={item}
              button={buttonSettings}
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
            />
          );
        })}
      </div>
    );
  }
}

export default PostsCards;
