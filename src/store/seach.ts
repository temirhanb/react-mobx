import { makeAutoObservable } from 'mobx'
import { IActor } from "../shared/types/peoples";
import { searchRequest } from "../entities/searchBar/api";

class SearchState {
  peoples: IActor[] = [];
  words: string = '';
  focus: boolean = false;
  pending: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  async fetchSearch(word: string) {
    this.pending = true

    const newPeople: IActor[] = await searchRequest(word)

    this.words = word
    this.peoples = [...this.peoples, ...newPeople]
    this.pending = false
  }

  setFocus(focus: boolean) {
    this.focus = focus
  }
}

export default new SearchState()
