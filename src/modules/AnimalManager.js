import APIManager from "../modules/APIManager"

// const remoteURL = "http://localhost:5002/animals"

// export default {
//   get(id) {
//     return fetch(`${remoteURL}/${id}`).then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}`).then(e => e.json())
//   },
//   removeAndList(id) {
//     return fetch(`${remoteURL}/${id}`, {
//             method: "DELETE"
//         })
//         .then(e => e.json())
//         .then(() => this.getAll())
//   }
// }

const AnimalData = Object.create(APIManager)


export default AnimalData