
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
        console.log(kinBody)
        fetch('http://localhost:8080/personAPI/kinships', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: kinBody
        })
        .then( async function (res){
            let response = await res.text()
            debugger
            if(res.status === 200) {
                resolve(res.json());
            } else {
                reject( new Error(response[0]));
            }
        })
    });
   
}
