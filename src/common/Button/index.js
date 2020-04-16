import React from "react";
import "./index.scss";

class Button extends React.Component {
  render() {
    const { onButtonClick } = this.props;
    return (
      <button className={"button"} onClick={onButtonClick}>
        x
      </button>
    );
  }
}

export default Button;
