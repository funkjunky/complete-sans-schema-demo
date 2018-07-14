import React from 'react';
import { connect } from 'react-redux';
import { expandModel } from '../configured-sans-schema';

import { removePost } from './actions';
import Button from '../Button';

const mapStateToProps = (state, { post }) => ({
    post: expandModel('posts', post, state),
});

export default connect(mapStateToProps, { removePost })(({ post, removePost }) => (
    <section className="post" name={ 'post-' + post.id }>
        <h2>{ post.user.name }</h2>
        <h2>{ post.title }</h2>
        <pre>{ post.message }</pre>
        <Button onClick={ () => removePost(post) }>Remove Post</Button>
    </section>
));
