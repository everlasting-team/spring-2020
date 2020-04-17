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

  handleCardButtonClick = (e, index) => {
    e.stopPropagation();

    const { activePostId, resetPost } = this.props;
    const { cards } = this.state;
    const lastDisabledItem = cards.findIndex((item) => item.disabled);
    const card = { ...cards[index], disabled: !cards[index].disabled };
    const newCards = [...cards].filter((item, i) => i !== index);

    if (card.disabled) {
      card.id === activePostId && resetPost();
      card.deletedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
      newCards.push(card);
    } else {
      card.deletedDate = null;
      newCards.unshift(card);
    }

    this.setState({ cards: newCards });
  };

  render() {
    const { searchValue, filteredCards, cards } = this.state;
    const { handleCardClick, activePostId } = this.props;

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
          {(filteredCards || cards).map((card, index) => (
            <Card
              key={card.id}
              data={card}
              selected={activePostId === card.id}
              onCardClick={() => handleCardClick(card)}
              onButtonClick={(e) => this.handleCardButtonClick(e, index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default LeftNav;
