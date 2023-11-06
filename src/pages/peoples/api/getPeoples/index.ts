import axios from "axios";

export const getPeoples = async () => {
  try {

    const {data} = await axios.get('https://swapi.dev/api/people/?page=1')
    const {results,count} = data
    return {results,count}
  } catch (e) {
    console.error(e)
  }
}
