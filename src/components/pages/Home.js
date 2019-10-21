import React from "react";
import { Link } from "react-router-dom";
import picture from "../../assets/Asset-16.png";
import { connect } from "react-redux";

// CSS Internal
const auu = {
  width: "150px",
  height: "auto",
  position: "absolute",
  top: "10px",
  left: "-40px",
  opacity: " 0.6"
};
const postStyle = {
  overflow: "hidden",
  paddingLeft: "90px"
};

const Home = ({ posts }) => {
  console.log(posts);
  const postList = posts.length ? (
    // loop data
    posts.map(post => {
      return (
        <div style={postStyle} className="post card" key={post.id}>
          <img
            style={auu}
            src={picture}
            alt="https://icons8.com/ouch/illustration/mirage-page-not-found"
          />
          <div className="card-content">
            <Link to={"/" + post.id}>
              <h4 className="card-title blue-text">{post.title}</h4>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">Empty data....</div>
  );
  return (
    <div className="container">
      <h4 className="center">All Posts</h4>
      {/* show data from loop funct */}
      {postList}
    </div>
  );
};

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  null
)(Home);
