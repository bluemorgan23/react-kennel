import APIManager from "./APIManager";


// export default {
//     get(id) {
//         return fetch(`${baseURL}/${id}`).then(r => r.json())
//     },
//     getAll() {
//         return fetch(`${baseURL}`).then(r => r.json())
//     },
//     removeAndList(id) {
//         return fetch(`${baseURL}/${id}`, {
//             method: "DELETE"
//         })
//         .then(e => e.json())
//         .then(() => this.getAll())
//     }
// }

export default Object.create(APIManager)