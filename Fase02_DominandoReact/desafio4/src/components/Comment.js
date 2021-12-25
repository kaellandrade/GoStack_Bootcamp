import React, { Fragment } from "react";
const Comment = ({ content, author }) => {
  return (
    <div className="box-comment-container">
      <img src={author.avatar} className="avatar" />
      <div className="content">
        <p>
          <strong>{author.name}</strong> {content}
        </p>
      </div>
    </div>
  );
};

export default Comment;
