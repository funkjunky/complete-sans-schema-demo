import React, { Component } from 'react';

import NewPost from './Posts/New';
import Post from './Posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Françanglais-book</h1>
          <h2 className="App-subtitle">Social Messaging for the modern Quebecois</h2>
        </header>
        <NewPost />
        <section id="posts">
            { this.props.posts.map(post => (
                <Post {...{ post } } />
            )) }
        </section>
      </div>
    );
  }
}

export default connect(({ posts }) => ({ posts: Object.values(posts) })(App);
