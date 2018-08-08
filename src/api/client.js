// TODO change the url to be something else or a variable
function fetchData() {
    return fetch('http://localhost:8080/questions?latest').then((result) => {
        return result.json();
    });
}

export default fetchData;