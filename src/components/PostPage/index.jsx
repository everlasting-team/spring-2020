import React, { PureComponent } from "react";

import "./index.scss";

class PostPage extends PureComponent {
  getNotSelectedBlock = () => {
    return <div className="post-page-wrapper no-posts">Choose card</div>;
  };

  render() {
    if (!this.props.post) {
      return this.getNotSelectedBlock();
    }

    return (
      <div className="post-page-wrapper">
        {this.props.post && this.props.post.name && (
          <div>{this.props.post.name}</div>
        )}
        {/* <div>{shortInfo}</div> */}
      </div>
    );
  }
}

export default PostPage;
