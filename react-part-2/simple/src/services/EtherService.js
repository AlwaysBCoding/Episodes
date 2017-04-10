import Q from 'q'

class EtherService {

  getEtherPrice() {
    var deferred = Q.defer()

    setTimeout(() => {
      deferred.resolve([
        {day: "April 1", price: 40},
        {day: "April 2", price: 41},
        {day: "April 3", price: 42},
      ])
    }, 3000)

    return deferred.promise
  }

}

module.exports = new EtherService()
