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


