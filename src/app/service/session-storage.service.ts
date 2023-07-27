import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionStorageService {
  constructor() {}

  setDataInSessionStorage(key: string, data: string) {
    sessionStorage.setItem(key, data);
  }
  getDataFromSessionStorage(key: string) {
    let data = sessionStorage.getItem(key);
    if (data == null || data == "undefined") {
      return null;
    }
    return data;
  }

}
