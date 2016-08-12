import algolia from 'algoliasearch'

class AlgoliaService {

  constructor() {
    this.client = algolia("4L9CPAAAZI", "c2fa5539341be8b38a94d152c9bf6553")
    this.index = this.client.initIndex('tweets')
  }

}

module.exports = new AlgoliaService()
