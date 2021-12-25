import React, { Fragment } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
export default (_) => {
  return (
    <Fragment>
      <Header name="Kaell Andrade"/>
      <PostList />
    </Fragment>
  );
};
