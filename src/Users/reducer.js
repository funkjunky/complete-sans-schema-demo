import { LOAD_NORMALIZED, threeLevelMerge } from '../reducer';

const initialState = { };

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_NORMALIZED:
            if (action.users) {
                return threeLevelMerge(state, action.users);
            } else return state;

        default:
            return state;
    }
};
