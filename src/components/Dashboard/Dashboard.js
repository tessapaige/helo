import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      search: "",
      userposts: true
    };
  }
  render() {
    let postsToDisplay = this.state.posts
      .filter((post, i) => {
        return post.includes(this.state.userposts);
      })
      .map((post, i) => {
        return <h2 key={i}>{post}</h2>;
      });
    return (
      <div>
        <div>
          Search:
          <input type="text" placeholder="Search by Title" />
          <button>Search</button>
          <button>Reset</button>
          <div>
            My Posts:
            <input
              type="checkbox"
              onClick={() => this.setState({ myPosts: !this.state.userPosts })}
              checked={this.state.userPosts}
            />
          </div>
          {postsToDisplay}
        </div>
      </div>
    );
  }
}
