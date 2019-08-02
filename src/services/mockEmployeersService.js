export function myRequest() {
    return fetch('http://localhost:8080/personAPI/employees')
        .then(res => res.json());
}

export function deletePerson(id, url) {
    fetch(url + '/' + id, {
        method: 'DELETE',
    }).then(response => response.json());
    /*response es undefined*/
}

