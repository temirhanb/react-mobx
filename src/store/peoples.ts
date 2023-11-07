import { makeAutoObservable } from 'mobx'
import { getNextPage, getPeoples, getSingleActor } from "../pages";
import { IActor } from "../shared/types/peoples";

type GetPeoples = {
  results: IActor[],
  count: number
}

class Peoples {
  peoples: IActor[] = [];
  favorites: IActor[] = [];
  actor = {} as IActor;
  count: number = 0;
  constructor() {
    makeAutoObservable(this)
  }

  async getPeoplesData() {
    const newPeople: GetPeoples = await getPeoples()
    this.count = newPeople.count
    this.peoples = [...this.peoples, ...newPeople.results]
  }

  async getNextPageData(page: number) {
    const newPeople: GetPeoples = await getNextPage(page)
    this.count = newPeople.count
    this.peoples = [...this.peoples, ...newPeople.results]
  }

  async fetchSingleActor(id: string) {
    this.actor = await getSingleActor(id)
  }

  addFavorites(item: IActor) {
    this.favorites.push(item)
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

  deleteFavorites(item: IActor) {

    this.favorites = this.favorites.filter(({name}) => {
      console.log(name, item)
      return item.name !== name
    })
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

  setFavorites(items: IActor[]) {
    this.favorites = items
  }

  setActor(actor: IActor) {
    this.actor = actor
  }
}

export default new Peoples()
