import { LOAD_NORMALIZED, twoLevelMerge } from '../reducer';

const initialState = { };

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_NORMALIZED:
            if (action.users) {
                return twoLevelMerge(state, action.users);
            } else return state;

        default:
            return state;
    }
};
