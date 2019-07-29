export function myRequest() {
    return new Promise((resolve, reject) => {
        const data = Array.from({length: 5}).map(() => ({
            name: 'Raul',
            lastname: 'Gonzales',
            document: '730461',
            nationality: 'Española',
        }));
        setTimeout(() => {
            resolve(data);
        }, 1000)
    })
}
