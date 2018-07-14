import { LOAD_NORMALIZED, loadNormalized, twoLevelMerge } from '../reducer';
import { flatten } from 'sans-schema';

const initialState = {
    likes: {},
    likedBy: {},
};

export const likePost = (user, post) => dispatch =>
    // pretending to POST /posts/
    setTimeout(() => {
        const normalizedData = flatten('posts')(post);
        dispatch(loadNormalized(normalizedData))
    }, 0);

//TODO: either make it easier through sans-schema, or provide a helper function for this.
export default function likes(state=initialState, { type, likes }) {
    switch (type) {
        case LOAD_NORMALIZED:
            if (!likes) return state;

            const { users, posts } = likes;

            if (users) {
                const result = {
                    users: twoLevelMerge(state.users, users),
                    posts: adjustModels(state.posts, users, 'posts', 'users')
                };
                return result;
            } else if (posts) {
                const result = {
                    users: adjustModels(state.users, posts, 'users', 'posts'),
                    posts: twoLevelMerge(state.posts, posts)
                };
                return result;
            } else {
                console.warn('likes should either have users or posts');
                return state;
            }

        default:
            return state;
    }
}

const adjustModels = (models, relatedModels, modelName, relatedModelName) => {
    let stateModels = { ...models };

    //Add model that are missing...
    for (let rId in relatedModels) {
        const asset = relatedModels[rId];
        asset[modelName].forEach(m => {
            if (!stateModels[m.id]) stateModels[m.id] = { id: m.id, [relatedModelName]: [] };
            if (!stateModels[m.id][relatedModelName].some(({ id }) => id === +rId)) {
                stateModels[m.id][relatedModelName].push({ id: +rId });
            }
        });
    }

    //Remove models that are longer connected to the asset...
    for (let mId in models) {
        //state.users[156].posts.filter({ id: 28 } => !posts[28]: false || posts[28].users.some(everything but 156 => === 156
        stateModels[mId][relatedModelName] = stateModels[mId][relatedModelName].filter(({ id }) =>
            !relatedModels[id]
            || relatedModels[id][modelName].some(m => m.id === +mId)
        );
    }

    return stateModels;
};
