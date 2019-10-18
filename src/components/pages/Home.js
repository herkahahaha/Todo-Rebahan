import React, { Component } from "react";
import { Link } from "react-router-dom";
import picture from "../../assets/Asset-16.png";
import axios from "axios";

// CSS Internal
const auu = {
  position: "absolute",
  top: "10px",
  left: "-100px",
  opacity: " 0.6"
};
const postStyle = {
  overflow: "hidden",
  paddingLeft: "80px"
};

class Home extends Component {
  state = {
    posts: []
  };
  // fetch data
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 5)
      });
    });
  }
  render() {
    // get data state
    const { posts } = this.state;
    // parse data from axios to the state
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
        <h4 className="center">Home</h4>
        {/* show data from loop funct */}
        {postList}
      </div>
    );
  }
}

export default Home;
