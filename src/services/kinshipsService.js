export function getKinships() {
    return fetch('http://localhost:8080/personAPI/kinships')
        .then(res => res.json());
}

export function deleteKinships(id, url) {
    return fetch(url + '/' + id, {
        method: 'delete',
    }).then(response => response.json());
}


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
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Accept-Encoding": "gzip, deflate",
                "Content-Length": "33",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            },
            body: kinBody
        })
            .then(res => {
                if(res.status === 200) {
                    resolve(res.json());
                } else {
                    reject( new Error(res.json()));
                }
            })
        });
       
}

    

