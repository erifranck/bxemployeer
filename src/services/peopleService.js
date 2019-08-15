export function getPeople() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/personAPI/employees')
            .then(res => {
                if(res.status === 200) {
                    resolve(res.json());
                } else {
                    reject( new Error(res.json()));
                }
            })
    });
}

export function deletePerson(id, url) {
    return fetch(url + '/' + id, {
        method: 'delete',
    }).then(response => response.json());
}

export function createPerson(payload) {
    return fetch('http://localhost:8080/personAPI/employees', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(payload)
    })
        .then( (response) => response.json());
}

export function editPerson(payload) {
    return fetch('http://localhost:8080/personAPI/employees', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(payload)
    })
        .then( (response) => response.json());
}
