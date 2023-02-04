import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";

const { PageContainer } = require("component/PageContainer");

const url = "https://jsonplaceholder.typicode.com/posts";

const PostsRedux = ({ posts, dispatch }) => {
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({ type: "AddPosts", payload: data });
    });
  }, []);
  return (
    <PageContainer>
      {posts.map(({ id, title }) => (
        <p key={id}>{title} </p>
      ))}
    </PageContainer>
  );
};
const mapStoreToProops = (state) => {
  return state;
};
export default connect(mapStoreToProops)(PostsRedux);
