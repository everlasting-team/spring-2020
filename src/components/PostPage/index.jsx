import React from "react";

import "./index.scss";

const PostPage = ({ post }) => {
  const getNotSelectedBlock = () => {
    return (
      <div className="not-found-container">
        <h1>Post not selected</h1>
      </div>
    );
  };

  if (!post) {
    return getNotSelectedBlock();
  }

  const { name, pic, shortInfo, bio } = post;

  return (
    <div className="post-page-wrapper">
      {pic && (
        <div className="img-wrapper">
          <img src={pic} />
        </div>
      )}
      <div className="post-info">
        <h1 className="title">{name}</h1>
        <h3 className="short-info">{shortInfo}</h3>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default PostPage;
