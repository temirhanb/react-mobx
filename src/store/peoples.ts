import { makeAutoObservable } from 'mobx'
import { getNextPage, getPeoples, getSingleActor } from "../pages";


class Peoples {
  peoples: Array<any> = [];
  favorites: Array<any> = [];
  actor: any = {};
  count: number = 0;

  constructor() {
    makeAutoObservable(this)
  }

  async getPeoplesData() {
    const newPeople:any = await getPeoples()
    this.count = newPeople.count
    this.peoples = [...this.peoples, ...newPeople.results]
  }

  async getNextPageData(page:any) {
    const newPeople:any = await getNextPage(page)
    this.count = newPeople.count
    this.peoples = [...this.peoples, ...newPeople.results]
  }

  async fetchSingleActor(id:any) {
    this.actor = await getSingleActor(id)
  }

  addFavorites(item:any) {
    this.favorites.push(item)
    localStorage.setItem('favorites',JSON.stringify(this.favorites))
  }

  deleteFavorites(item:any) {

    this.favorites = this.favorites.filter(({name}) => {
      console.log(name, item)
      return item.name !== name
    })
    localStorage.setItem('favorites',JSON.stringify(this.favorites))
  }

  setFavorites(items:any) {
    this.favorites = items
  }
  setActor(actor:any){
    this.actor = actor
  }
}

export default new Peoples()
