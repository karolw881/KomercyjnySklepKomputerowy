import { makeAutoObservable } from "mobx";
import axios from "axios";

class GlobalStore {
  user = null;
  fetched = false;

  constructor() {
    makeAutoObservable(this);
    const user = JSON.parse(localStorage.getItem("user"));
    
    this.setUser(user);
    
    if(user)
    {
        this.setFetched(true);
    }

    console.log(user);
  }

  get getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  get getFetched(){
    return this.fetched;
  }

  setFetched(bool) {
    this.fetched = bool;
  }

}

const globalStore = new GlobalStore();
export default globalStore;
