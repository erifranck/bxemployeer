export function getKinships() {
    return fetch('http://localhost:8080/personAPI/kinships')
        .then(res => res.json());
}

export function deleteKinships(id, url) {
    return fetch(url + '/' + id, {
        method: 'delete',
    }).then(response => response.json());
}