export function myRequest() {
    return fetch('http://localhost:8080/personAPI/employees')
        .then(res => res.json());
}

export function deletePerson(id, url) {
    return fetch(url + '/' + id, {
        method: 'delete',
    }).then(response => response.json());
}