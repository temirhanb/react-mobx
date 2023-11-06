import axios from "axios";

export const getNextPage = async (page:any) => {
  try {

    const {data} = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    const {results, count} = data
    return {results, count}
  } catch (e) {

    console.error(e)
  }
}
