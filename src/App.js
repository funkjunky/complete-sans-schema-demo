import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import NewPost from './Posts/New';
import Post from './Posts';
import { loadUsers } from './Users/actions';
import { loadPosts } from './Posts/actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Françanglais-book</h1>
          <h2 className="App-subtitle">Social Messaging for the modern Quebecois</h2>
        </header>
        <Button onClick={ () => this.props.loadUsers() }>Load users</Button>
        <Button onClick={ () => this.props.loadPosts() }>Load posts</Button>
        <NewPost />
        <section id="posts">
            { this.props.posts.map(post => (
                <Post {...{ post, key: post.id } } />
            )) }
        </section>
      </div>
    );
  }
}

export default connect(({ posts }) => ({ posts: Object.values(posts) }), { loadUsers, loadPosts })(App);
