import React from 'react';
import { connect } from 'react-redux';
import { expandModel } from '../configured-sans-schema';

import * as postActions from './actions';
import Button from '../Button';

const mapStateToProps = (state, { post }) => ({
    post: expandModel('posts', post, state),
    currentUser: state.currentUser && expandModel('users', state.currentUser, state),
});

export default connect(mapStateToProps, postActions)(({ post, currentUser, ...postActions }) => {
    //console.log('post: ', post);
    return (
        <section className="post" name={ 'post-' + post.id }>
            <h2>{ post.user.name }</h2>
            <h2>{ post.title }</h2>
            <pre>{ post.message }</pre>
            { post.likedBy.find(u => u.id === currentUser.id)
                ? <Button onClick={ () => postActions.unlikePost(currentUser, post) }>Unlike Post</Button>
                : <Button onClick={ () => postActions.likePost(currentUser, post) }>Like Post</Button>
            }
            <Button onClick={ () => postActions.removePost(post) }>Remove Post</Button>
        </section>
    );
});
