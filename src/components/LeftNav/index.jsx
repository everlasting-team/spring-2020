import React from "react";
import moment from "moment";

import Input from "./../../common/Input";
import Card from "./../../common/Card";

import { getCardsData } from "../../api";

import "./index.scss";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    this.loadCards();
  }

  handleSearchInputChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  };

  getFilteredCards = () => {
    const { searchValue, cards } = this.state;

    return cards.filter(
      (card) => card.name.toLowerCase().search(searchValue.toLowerCase()) !== -1
    );
  };

  loadCards = async () => {
    const cards = await getCardsData();

    this.setState({ cards });
  };

  handleCardButtonClick = (e, id) => {
    e.stopPropagation();
    const { activePostId, resetPost } = this.props;
    const { cards } = this.state;
    const index = cards.findIndex((item) => item.id === id);
    const newCards = [...cards];
    const card = newCards[index];

    card.disabled = !card.disabled;

    if (card.disabled) {
      card.id === activePostId && resetPost();
      card.deletedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
      newCards.splice(index, 1);
      newCards.push(card);
    } else {
      card.deletedDate = null;
      newCards.splice(index, 1);
      newCards.unshift(card);
    }

    this.setState({ cards: newCards });
  };

  render() {
    const { searchValue } = this.state;
    const { handleCardClick, activePostId } = this.props;
    const filteredCards = this.getFilteredCards();

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
          {filteredCards.map((card) => (
            <Card
              key={card.id}
              data={card}
              selected={activePostId === card.id}
              onCardClick={() => handleCardClick(card)}
              onButtonClick={(e) => this.handleCardButtonClick(e, card.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default LeftNav;
