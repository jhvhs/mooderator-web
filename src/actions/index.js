import {ADD_QUESTION} from '../constants/action-types.js';

export const addQuestion = question => ({ type: ADD_QUESTION, payload: question });

export function fetchQuestion() {
    return (dispatch) => {
        return fetch('http://localhost:8080/questions?latest')
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                dispatch(addQuestion(data));
                return data;
            })
            .catch(error => console.error(error));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}