import { makeAutoObservable } from 'mobx'
import { getNextPage, getPeoples, getSingleActor } from "../pages";
import { IActor } from "../shared/types/peoples";
import { searchRequest } from "../entities/searchBar/api";

class SearchState {
  peoples: IActor[] = [];
  words: string =''
  constructor() {
    makeAutoObservable(this)
  }

  async fetchSearch(word:string) {
    const newPeople:  IActor[] = await searchRequest(word)

    this.words = word
    this.peoples = [...this.peoples, ...newPeople]
  }

}

export default new SearchState()
