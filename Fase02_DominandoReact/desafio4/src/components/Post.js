import React from "react";
import Comment from "../components/Comment";

const renderComment = (comments = []) => {
  return comments.map(({ id, author, content }) => (
    <Comment key={id} author={author} content={content} />
  ));
};

const Post = ({ author, date, content, comments }) => {
  return (
    <div className="content-post">
      <div className="profile-details">
        <img src={author.avatar} className="avatar" />
        <div>
          <strong>{author.name}</strong>
          <small>{date}</small>
        </div>
      </div>
      <p>{content}</p>
      <div>{renderComment(comments)}</div>
    </div>
  );
};

export default Post;
