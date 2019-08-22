
export function getKinships() {
    let url = 'http://localhost:8080/personAPI/kinships'
    return fetch(url)
        .then(res => res.json());
}

export function getKinshipById(id) {
    let url = 'http://localhost:8080/personAPI/kinships'
    return fetch(url + '/' + id)
        .then(res => res.json());
}

export function deleteKinships(id, url) {
    return fetch(url + '/' + id, {
        method: 'delete',
    }).then(response => response.json());
}

export function getKinshipsPeople(id) {
    return fetch('http://localhost:8080/personAPI/kinships/employee/' + id)
        .then(res => res.json());
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
            },
            body: kinBody
        })
        .then( async function (res){
            let response = await res.text()
            if(res.status === 200) {
                resolve(res);
            } else {
                reject( new Error(JSON.parse(response).message));
            }
        })
    });
   
}


export function updateKinship(payload) {

    return new Promise((resolve, reject) => {
        let kinBody = "kinshipId="
        kinBody += payload.kinshipId
        kinBody += "&type="
        kinBody += payload.kinship
        console.log(kinBody)
        fetch('http://localhost:8080/personAPI/kinships', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: kinBody
        })
        .then( async function (res){
            let response = await res.text()
            if(res.status === 200) {
                resolve(res);
            } else {
                reject( new Error(JSON.parse(response).message));
            }
        })
    });
   
}
