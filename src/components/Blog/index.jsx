import React from "react";

import LeftNav from "./../LeftNav";
import PostPage from "./../PostPage";

import { getFullPost } from "../../api";

import "./index.scss";

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { post } = this.state;

    if ((!prevState.post && post) || (post && post.id !== prevState.post.id)) {
      this.loadFullPost(post.more);
    }
  }

  loadFullPost = async (path) => {
    const fullPost = await getFullPost(path);
    const newPost = {
      ...this.state.post,
      ...fullPost,
    };

    this.setState({ post: newPost });
  };

  handleCardClick = (data) => {
    this.setState({ post: data });
  };

  render() {
    const { post } = this.state;
    return (
      <div className="blog">
        <LeftNav handleCardClick={this.handleCardClick} />
        <PostPage post={post} />
      </div>
    );
  }
}

export default Blog;
