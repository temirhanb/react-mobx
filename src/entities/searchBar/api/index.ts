import axios from "axios";

export const searchRequest = async (word :string = '')=>{
  try {

    const {data} = await axios.get(`https://swapi.dev/api/people/?search=${word}`)
    const {results} = data
    return results
  } catch (e) {

    throw(e)
  }
}
