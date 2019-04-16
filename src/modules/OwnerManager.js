const baseURL = "http://localhost:5002/ownersFromAPI"

export default {
    get(id) {
        return fetch(`${baseURL}/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(`${baseURL}`).then(r => r.json())
    }
}