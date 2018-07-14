import React from 'react';
import { connect } from 'react-redux';
import { expandModel } from '../configured-sans-schema';

const mapStateToProps  = (state, { user }) => ({
    user: expandModel('users', user, state),
});

export default connect(mapStateToProps)(({ user }) => (
    <section className="user-profile">
        <p>{ user.name }</p>
        <div>
            <h3>Posts</h3>
            { user.posts.map(post => (
                <a href={ '#post-' + post.id } key={ post.id }>{ post.title }</a>
            )) }
            <h3>Likes</h3>
            { user.likes.map(likedPost => (
                <a href={ '#post-' + likedPost.id } key={ likedPost.id }>{ likedPost.title }</a>
            )) }
        </div>
    </section>
));
