import React from 'react';
import { connect } from 'react-redux';
import { expandModel } from 'sans-schema';

const mapStateToProps => (state, user) => ({
    user: expandModel('users', user, state),
});

export default user => (
    <section className="user-profile">
        <p>{ user.name }</p>
        <div>
            <h3>Posts</h3>
            { user.posts.map(post => (
                <a href={ '#' + post.id }>{ post.title }</a>
            )) }
            <h3>Likes</h3>
            { user.likes.map(likedPost => (
                <a href={ '#' + likedPost.id }>{ likedPost.title }</a>
            )) }
        </div>
    </section>
);
