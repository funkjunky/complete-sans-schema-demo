import { LOAD_NORMALIZED, twoLevelMerge } from '../reducer';

const initialState = { };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_NORMALIZED:
            if (action.posts) {
                return twoLevelMerge(state, action.posts);
            } else return state;

        case 'REMOVE_POST':
            const newState = { ...state };
            delete newState[action.post.id];
            return newState;

        default:
            return state;
    }
};

export default reducer;
