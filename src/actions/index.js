import {ADD_QUESTION} from '../constants/action-types.js';
import fetchData from "../api/client";

export const addQuestion = question => ({ type: ADD_QUESTION, payload: question });

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

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

