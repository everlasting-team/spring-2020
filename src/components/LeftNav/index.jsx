import React from "react";

import Input from "./../../common/Input";
import PostsCards from "./../PostsCards";

import { getCardsData } from "../../api";

import "./index.scss";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      filteredCards: null,
    };
  }

  componentDidMount() {
    this.loadCards();
  }

  handleSearchInputChange = ({ target: { value } }) => {
    const filteredCards = this.state.cards.filter(
      (item) => item.name.toLowerCase().search(value.toLowerCase()) !== -1
    );

    this.setState({ filteredCards });
  };

  loadCards = async () => {
    const cards = await getCardsData();

    this.setState({ cards });
  };

  render() {
    const { searchValue, filteredCards, cards } = this.state;
    const { handleCardClick } = this.props;

    return (
      <div className="left-nav-wrapper">
        <div className="search-input">
          <Input
            placeholder="Search..."
            value={searchValue}
            name="searchInput"
            handleChange={this.handleSearchInputChange}
          />
        </div>
        <div className="cards-wrapper">
          <PostsCards
            cards={filteredCards || cards}
            onCardClick={handleCardClick}
            onButtonClick={this.handleButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default LeftNav;
