import axios from "axios";
import { IActor } from "../../../../shared/types/peoples";

type IRequest =  {
  results: IActor[],
  count: number
}

export const getPeoples = async (): Promise<IRequest> => {
  try {
    const {data} = await axios.get('https://swapi.dev/api/people/?page=1')
    const {results, count} = data
    return {results, count}
  } catch (e) {
    throw(e)
  }
}
