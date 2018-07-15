import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import NewPost from './Posts/New';
import Post from './Posts';
import UserProfile from './Users/Profile';
import { loadUsers } from './Users/actions';
import { loadPosts } from './Posts/actions';
import './App.css';

export const chooseUser = user => ({
    type: 'CHOOSE_USER',
    user,
});

class App extends Component {
  render() {
    const { users, currentUser, posts, chooseUser, loadUsers, loadPosts } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Françanglais-book</h1>
          <h2 className="App-subtitle">Social Messaging for the modern Quebecois</h2>
        </header>
        <Button onClick={ loadUsers }>Load users</Button>
        <Button onClick={ loadPosts }>Load posts</Button>
        <hr />
        { Object.values(users).map(({ id, name }) => (
            <Button selected={ currentUser && id === currentUser.id } onClick={ () => chooseUser({ id }) } key={ id }>{ name }</Button>
        )) }
        <hr />
        { currentUser &&
            <UserProfile />
        }
        <hr />
        <NewPost />
        <section id="posts">
            { Object.values(posts).map(({ id }) => (
                <Post {...{ post: { id }, key: id } } />
            )) }
        </section>
      </div>
    );
  }
}

export default connect(({ posts, users, currentUser }) => ({ posts, users, currentUser }), { loadUsers, loadPosts, chooseUser })(App);
