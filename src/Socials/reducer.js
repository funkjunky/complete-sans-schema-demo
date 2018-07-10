const initialState = { };

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_NORMALIZED_DATA:
            if (action.socials) {
                return {
                    ...state,
                    ...action.socials,
                };
            }
        default:
            return state;
    };
};
