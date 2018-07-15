import { combineReducers } from 'redux';

import users from './Users/reducer';
import posts from './Posts/reducer';
import likes from './Likes/reducer';

export const LOAD_NORMALIZED = 'LOAD_NORMALIZED';
export const loadNormalized = data => ({
    type: LOAD_NORMALIZED,
    ...data,
});

export const threeLevelMerge = (obj, obj2) => {
    const newObj = { ...obj };
    for(const k in obj2) {
        newObj[k] = { ...(obj[k] || {}), ...obj2[k] };
        // for each property in our new object, we want to merge any arrays or 1-1 objects.
        for(const k2 in newObj[k]) {
            if (typeof newObj[k][k2] === 'object') {
                newObj[k][k2] = mergeModelValue((obj2[k] || {})[k2], (obj[k] || {})[k2]);
            }
        }
    }
    return newObj;
};

// merges either a models properties, or an array of models with ids
const mergeModelValue = (a, b) => {
    // two array of models
    if (Array.isArray(a) || Array.isArray(b)) {
        return (a || []).filter(v => !(b || []).find(bv => bv.id === v.id)).concat(b || []);
    // two models
    } else {
        return Object.assign(Object.create(a || {}), a, b);
    }
};

export default combineReducers({
    users,
    posts,
    likes,
    currentUser: (state = null, action) => action.type === 'CHOOSE_USER' ? action.user : state,
});
