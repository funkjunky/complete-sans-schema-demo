import { LOAD_NORMALIZED } from '../reducer';

const initialState = {
    likes: {},
    likedBy: {},
};

//TODO: either make it easier through sans-schema, or provide a helper function for this.
export default function likes(state=initialState, { type, likes }) {
    switch (type) {
        case LOAD_NORMALIZED:
            if (!likes) return state;
            return {
                likedBy: twoLevelMerge(state.likedBy, likes.likedBy),
                likes: twoLevelMerge(state.likes, likes.likes),
            };

        default:
            return state;
    }
}

export const twoLevelMerge = (obj, obj2) => {
    const newObj = { ...obj };
    for(const k in obj2) {
        newObj[k] = { ...(obj[k] || {}), ...obj2[k] };
    }
    return newObj;
};
