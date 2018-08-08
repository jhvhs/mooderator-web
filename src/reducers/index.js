import { ADD_QUESTION } from "../constants/action-types";

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return Object.assign({}, state, { question : action.payload });
        default:
            return state;
    }

};

export default rootReducer;
