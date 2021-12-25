import React, { Component } from "react";
import POSTS from "../data/data";
import Post from "./Post";
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { POSTS };
  }
  renderPosts() {
    return this.state.POSTS.map(({ id, author, date, content, comments }) => (
      <Post
        key={id}
        author={author}
        date={date}
        content={content}
        comments={comments}
      />
    ));
  }

  render() {
    return this.renderPosts();
  }
}

export default PostList;
