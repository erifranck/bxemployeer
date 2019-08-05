

export function myRequest() {
    return new Promise((resolve, reject) => {
        const data = Array.from({length: 5}).map(() => ({
            id: Math.random() * 1000,
            name: 'Raul',
            lastname: 'Gonzales',
            document: '730461',
            nationality: 'Española',
        }));
        setTimeout(() => {
            if (Math.round(Math.random())) {
                resolve({
                    data: data,
                });
            } else {
                reject(new Error('the request failed'))
            }
        }, 1000)
    })
}
  

  /*return fetch('http://localhost:8080/personAPI/employees')
      .then(res => res.json());
}*/
