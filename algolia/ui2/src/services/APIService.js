import Q from 'q'

class APIService {

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getPlayers() {
    var deferred = Q.defer()

    fetch(`${this.endpoint}/tweets`, {})
    .then((response) => {
      deferred.resolve(response.json())
    })
    .catch((error) => deferred.reject(error.message))

    return deferred.promise
  }

}

module.exports = new APIService("http://localhost:3003")
