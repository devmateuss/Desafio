const body = {
    getAgents: JSON.stringify({
        "query": "{agents{id, name, Departament:name}}"
    })
}

fetch("http://localhost:3003/", {
    method: 'POST',
    body: JSON.stringify({
        "query": "{agents{id, name, Departament:name}}"
    })
}).then(response => {
    console.log(response)
}).catch(err => console.log(err))