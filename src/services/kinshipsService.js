

export function createKinship(payload) {

    return new Promise((resolve, reject) => {
        let kinBody = "sourceId="
        kinBody += payload.sourceEmployee
        kinBody += "&targetId="
        kinBody += payload.targetEmployee
        kinBody += "&type="
        kinBody += payload.kinship

        fetch('http://localhost:8080/personAPI/kinships', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: kinBody
        })
            .then(res => {
                debugger
                if(res.status === 200) {
                    resolve(res.json());
                } else {
                    reject( new Error(res.json()));
                }
            })
        });
       
}

    

