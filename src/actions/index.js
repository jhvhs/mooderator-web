import {ADD_QUESTION, SUBMITTED_RESULT, CLOSE_MESSAGE, DAILY_STATS} from "../constants/action-types";
import {fetchData, fetchStats, sendResult} from "../api/client";

export const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
export const submittedResult = result => ({ type: SUBMITTED_RESULT, payload: result });
export const closeMessage = result => ({ type: CLOSE_MESSAGE, payload: result });
export const dailyStats = stats => ({ type: DAILY_STATS, payload: stats });

export function fetchQuestion() {
    return (dispatch) => {
        return fetchData()
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                dispatch(addQuestion(data[0]));
                return data;
            })
            .catch(error => console.error(error));
    };
}

export function submitResult(result) {
    return (dispatch) => {
        return sendResult(result)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                dispatch(submittedResult(data));
                return data;
            })
            .catch(error => console.error(error));
    };
}

export function close() {
    return (dispatch) => (dispatch(closeMessage()));
}

export function fetchDailyStats(questionId) {
    return (dispatch) => {
        return fetchStats(questionId)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                dispatch(dailyStats(data));
                return data;
            })
            .catch(error => console.error(error));
    };
}


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

