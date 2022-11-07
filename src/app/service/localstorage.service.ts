import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  public saveItem(key: string, value: string){
    localStorage.setItem(key, value);
  }
}
