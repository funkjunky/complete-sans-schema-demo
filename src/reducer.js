import { combineReducers } from 'redux';

import users from './Users/reducer.js';
import posts from './Posts/reducer.js';
import usersXposts from './Likes/reducer.js';
import socials from './Socials/reducer.js';

export const LOAD_NORMALIZED = 'LOAD_NORMALIZED';
export const loadNormalized = data => ({
    type: LOAD_NORMALIZED,
    ...data,
});

export default combineReducers({
    users,
    posts,
    usersXposts,
    socials,
});
