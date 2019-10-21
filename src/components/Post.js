import React from "react";
import { deletePost } from "../store/action/DeleteAction";
import { connect } from "react-redux";

const Post = ({ post }) => {
  let handleClick = () => {
    console.log(deletePost(post.id));
  };
  const postDetail = post ? (
    <div className="post">
      <h3 className="center">{post.title}</h3>
      <p>{post.body}</p>
      <div className="center">
        <button onClick={handleClick} className="btn grey">
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading data....</div>
  );
  return <div className="container">{postDetail}</div>;
};
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.posts__id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
