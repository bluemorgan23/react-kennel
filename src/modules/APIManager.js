const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (resource, id) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
        },
    },
    all: {
        value: function (resource) {
            return fetch(`${remoteURL}/${resource}`).then(e => e.json())
        }
    },
    removeAndList: {
        value: function ( id, resource ) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                            method: "DELETE"
                        })
                        .then(e => e.json())
                        .then(() => this.all(resource))
        }
    },
    post: {
        value: function (resource, thingToAdd) {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(thingToAdd)
            }).then(r => r.json())
        }
    },
    put: {
        value: function (resource, itemToEdit) {
            return fetch(`${remoteURL}/${resource}/${itemToEdit.id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(itemToEdit)
            }).then(r => r.json())
        }
    }
})