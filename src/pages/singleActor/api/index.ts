import axios from "axios";
import { IActor } from "../../../shared/types/peoples";

export const getSingleActor = async (id: string): Promise<IActor> => {
  try {
    const {data} = await axios.get(`https://swapi.dev/api/people/${id}/`)

    return data
  } catch (e) {
    throw(e)
  }
}
