export function myRequest() {
    return new Promise((resolve, reject) => {
        const data = Array.from({length: 5}).map(() => ({
            nombre: 'Raul',
            apellido: 'Gonzales',
            documento: '730461',
            nacionalidad: 'Española',
        }));
        setTimeout(() => {
            resolve(data);
        }, 1000)
    })
}
