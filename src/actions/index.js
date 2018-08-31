import {ADD_QUESTION, SUBMITTED_RESULT} from '../constants/action-types.js';
import {fetchData, sendResult} from "../api/client";
import {CLOSE_MESSAGE} from "../constants/action-types";

export const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
export const submittedResult = result => ({ type: SUBMITTED_RESULT, payload: result });
export const closeMessage = result => ({ type: CLOSE_MESSAGE, payload: result });

export function fetchQuestion() {
    return (dispatch) => {
        return fetchData()
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                dispatch(addQuestion(data));
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

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

