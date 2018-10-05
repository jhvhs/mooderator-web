import {ADD_QUESTION, SUBMITTER_RESULT} from '../constants/action-types.js';
import {fetchData, sendResult} from "../api/client";

export const addQuestion = question => ({ type: ADD_QUESTION, payload: question });
export const submittedResult = result => ({ type: SUBMITTER_RESULT, payload: result });

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

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

