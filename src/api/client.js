function fetchData() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/questions/latest`)
}

export default fetchData;