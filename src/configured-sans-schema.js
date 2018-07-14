import * as ss from 'sans-schema';

const config = {
    manyToMany: {
        likes: {
            users: 'likes',
            posts: 'likedBy',
        },
    },
    oneToOne: {
        users: ['social'],
    },
};

export const flatten = modelName => ss.flatten(modelName, config);
export const expandModel = (modelName, model, state, deepness) => ss.expandModel(modelName, model, state, deepness, config);
export const removeModel = (modelName, model, state) => ss.removeModel(modelName, model, state, config);
