import { LOAD_NORMALIZED, loadNormalized } from '../reducer';
import sampleUsers from './sampleUsers';

const initialState = { };

export const loadUsers = () => dispatch =>
    setTimeout(() => {
        const normalizedData = flatten('users')(sampleUsers);
        dispatch(loadNormalized(normalizedData))
    }, 500);

export default (state = initialState, action) => {
    switch(action.type) {
            //TODO: I need to do a more complicated merge here.
        case LOAD_NORMALIZED:
            if (action.users) {
                return {
                    ...state,
                    ...action.users,
                };
            }
        default:
            return state;
    };
};
