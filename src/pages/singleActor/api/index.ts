import axios from "axios";

export const getSingleActor = async (id:any) => {
  try {
    const {data} = await axios.get(`https://swapi.dev/api/people/${id}/`)

    return data
  } catch (e) {
    console.error(e)
  }
}
