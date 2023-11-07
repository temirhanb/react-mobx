import axios from "axios";

export const searchRequest = async (question :string = 'luk')=>{
  try {

    const {data} = await axios.get(`https://swapi.dev/api/people/?search=${question}`)
    const {results, count} = data
    return {results, count}
  } catch (e) {

    console.error(e)
  }
}
