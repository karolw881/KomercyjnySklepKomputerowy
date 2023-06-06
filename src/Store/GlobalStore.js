import { makeAutoObservable } from "mobx";

class GlobalStore {
  user = null;
  fetched = false;
  totalPrice = 0;
  usersShippingData = [];
  usersPaymentDetails = [];

  constructor() {
    makeAutoObservable(this);
    const user = JSON.parse(localStorage.getItem("user"));
    this.setUser(user);
  }

  get getUser() {
    return this.user;
  }

  get getTotalPrice()
  {
    return this.totalPrice;
  }

  get getUsersShippingData()
  {
    return this.usersShippingData;
  }

  get getUsersPaymentDetails()
  {
    return this.usersPaymentDetails;
  }

  setUsersPaymentDetails(details)
  {
    this.usersPaymentDetails = details;
  }

  setUsersShippingData(data)
  {
    this.usersShippingData = data;
  }

  setTotalPrice(amount)
  {
    this.totalPrice = amount;
  }

  setUser(user) {
    if(user)
    {
        this.setFetched(true);
        this.user = user;
    }

    else
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
