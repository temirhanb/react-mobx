import axios from "axios";
import { IActor } from "../../../../shared/types/peoples";

type GetPeoples = {
  results: IActor[],
  count: number
}
export const getNextPage = async (page: number): Promise<GetPeoples> => {
  try {

    const {data} = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    const {results, count} = data
    return {results, count}
  } catch (e) {
    throw(e)
  }
}
