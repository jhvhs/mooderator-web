import { ADD_QUESTION } from "../constants/action-types";

const initialState = {
    question : 'is this a new silly question?'
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return Object.assign({}, state, { question : action.payload });
        default:
            return state;
    }

};

export default rootReducer;
