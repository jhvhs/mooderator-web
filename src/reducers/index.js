import {ADD_QUESTION, CLOSE_MESSAGE} from "../constants/action-types";
import { SUBMITTED_RESULT } from "../constants/action-types";

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return Object.assign({}, state, { question : action.payload });
        case SUBMITTED_RESULT:
            return Object.assign({}, state, { hasDataSent: true });
        case CLOSE_MESSAGE:
            console.log(state, action)  ;
            return Object.assign({}, state, { hasDataSent: false });
        default:
            return state;
    }

};

export default rootReducer;
