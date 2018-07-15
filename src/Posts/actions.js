import { loadNormalized } from '../reducer';
import { removeModel, flatten } from '../configured-sans-schema';
import samplePosts from './samplePosts.js';

export const loadPosts = () => dispatch =>
    // pretending to GET /posts/
    setTimeout(() => {
        const normalizedData = flatten('posts')(samplePosts);
        dispatch(loadNormalized(normalizedData));
    }, 500);

export const addPost = post => dispatch => {
    // pretending to POST /posts/
    setTimeout(() => {
        const normalizedData = flatten('posts')({
            ...post,
            //adding an id to the post. Normally the server would do this.
            id: Math.floor(Math.random() * 100000)
        });
        console.log('normalized data: added: ', normalizedData);
        dispatch(loadNormalized(normalizedData));
    }, 200);
}

export const removePost = post => (dispatch, getState) =>
    // pretending to DELETE /posts/
    setTimeout(() => {
        const normalizedData = removeModel('posts', post, getState());
        dispatch(loadNormalized(normalizedData));
        dispatch({
            type: 'REMOVE_POST',
            post,
        });
    }, 200);

export const likePost = (user, post) => dispatch =>
    // pretending to POST /posts/
    setTimeout(() => {
        const normalizedData = flatten('posts')({
            id: post.id,
            likedBy: [
                ...post.likedBy,
                { id: user.id }
            ],
        });
        dispatch(loadNormalized(normalizedData))
    }, 0);

export const unlikePost = (user, post) => dispatch =>
    // pretending to POST /posts/
    setTimeout(() => {
        // Note: we need both the post and the user in the flattened data, to get the relational data we need.
        // Otherwise we'll only remove on one side of the many to many relationship.
        const normalizedData = flatten('posts')({
            id: post.id,
            likedBy: post.likedBy.filter(u => u.id !== user.id),
            user: {
                id: user.id,
                likes: user.likes.filter(p => p.id !== post.id),
            },
        });

        dispatch(loadNormalized(normalizedData))
    }, 0);
