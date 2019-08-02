export function getPeople() {
    return fetch('http://localhost:8080/personAPI/employees')
        .then(res => res.json());
} 
