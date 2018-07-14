import { LOAD_NORMALIZED, loadNormalized, twoLevelMerge } from '../reducer';

const initialState = { };

export const addComment = comment => dispatch =>
    // pretending to POST /posts/comments
    setTimeout(() => {
        const normalizedData = flatten('Comments')(comment);
        dispatch(loadNormalized(normalizedData))
    }, 200);


export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_NORMALIZED:
            if (action.posts) {
                return twoLevelMerge(state, action.posts);
            } else return state;

        default:
            return state;
    };
};
