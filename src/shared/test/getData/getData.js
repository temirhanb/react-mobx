const axios = require('axios')

const getPeoples = async () => {
  try {
    const {results} = await axios.get('https://swapi.dev/api/people/?page=1')

    return {results}
  } catch (e) {
    throw(e)
  }
}

module.exports = getPeoples
