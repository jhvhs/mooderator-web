// TODO change the url to be something else or a variable
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then((result) => {
        return result.json();
    });
}

export default fetchData;