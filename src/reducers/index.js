import {ADD_QUESTION, CLOSE_MESSAGE, SUBMITTED_RESULT, DAILY_STATS} from "../constants/action-types";

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return Object.assign({}, state, { question : action.payload });
        case SUBMITTED_RESULT:
            return Object.assign({}, state, { hasDataSent: true });
        case CLOSE_MESSAGE:
            return Object.assign({}, state, { hasDataSent: false });
        case DAILY_STATS:
            return Object.assign({}, state, { dailyStats: action.payload });
        default:
            return state;
    }

};

export default rootReducer;
