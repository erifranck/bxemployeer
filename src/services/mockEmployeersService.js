export function getPeopleMock() {
    return new Promise((resolve, reject) => {
        const data = Array.from({length: 100}).map(() => ({
            name: 'Raul',
            lastname: 'Gonzales',
            document: Math.random() * 100000,
            nationality: 'Española',
        }));
        setTimeout(() => {
            if (Math.round(Math.random())) {
                resolve(data);
            } else {
                reject(new Error('the request failed'))
            }
        }, 1000)
    })
}
export function deleteMock(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.round(Math.random())) {
                resolve(id);
            } else {
                reject(new Error('the request failed'))
            }
        }, 1000)
    })
}
