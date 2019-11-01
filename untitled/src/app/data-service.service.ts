import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  isWalletValid: boolean = false;

  constructor() { }
}
