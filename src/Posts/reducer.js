import { LOAD_NORMALIZED, loadNormalized } from '../reducer';
import { removeModel } from 'sans-schema';
import samplePosts from '../samplePosts.js';

const initialState = { };

export const loadPosts = () => dispatch =>
    // pretending to GET /posts/
    setTimeout(() => {
        const normalizedData = flatten('posts')(samplePosts);
        dispatch(loadNormalized(normalizedData))
    }, 500);

export const addPost = post => dispatch =>
    // pretending to POST /posts/
    setTimeout(() => {
        const normalizedData = flatten('posts')(post);
        dispatch(loadNormalized(normalizedData))
    }, 200);

export const removePost = post => dispatch =>
    // pretending to DELETE /posts/
    setTimeout(() => {
        const normalizedData = removeModel('posts', post);
        dispatch(loadNormalized(normalizedData));
        dispatch({
            type: 'REMOVE_POST',
            post,
        });
    }, 200);

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_NORMALIZED:
            if (action.posts) {
                return {
                    ...state,
                    ...action.posts,
                };
            }

        case 'REMOVE_POST',
            const newState = { ...state };
            delete newState[action.post.id];
            return newState;

        default:
            return state;
    };
};
