import { Injectable } from '@angular/core';
import { Account, adminAccount } from './models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public isAuthorized: boolean;
  public accounts: Account[];

  constructor() { 
    this.isAuthorized = false;
    this.accounts = [adminAccount];
   }
}
