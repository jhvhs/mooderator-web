export function fetchData() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/questions`);
}

export function fetchStats(questionId) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/questions/${questionId}/daily-statistics`);
}

export function sendResult(result) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/results`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    });
}
