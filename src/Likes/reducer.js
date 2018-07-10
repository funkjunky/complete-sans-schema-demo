const initialState = {
    users: {},
    posts: {},
};

export const likePost = (user, post) => dispatch =>
    // pretending to POST /posts/
    setTimeout(() => {
        const normalizedData = flatten('posts')(post);
        dispatch(loadNormalized(normalizedData))
    }, 0);

export default (state = initialState, action) => {
    switch(action.type) {
            //TODO: I need to do a more complicated merge here.
        case LOAD_NORMALIZED_DATA:
            if (action.likes) {
                return {
                    ...state,
                    ...action.likes,
                };
            }
        default:
            return state;
    };
};
