function fetchData() {
    return fetch('http://localhost:3000/questions').then(result => {
        return result.json();
    });
}

export default fetchData;