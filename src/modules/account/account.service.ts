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

  public add(account: Account): void {
    this.accounts.push(account);
    // спред оператор (...)  this.account = новому массиву,
    // где скопирован предыдущие значения массива и добавлено новое
    // this.accounts = [                
    //   ...this.accounts,
    //   account
    // ]
  }

  public login(login: string, password: string): boolean {
    const isExist = (account: Account) => account.login === login && account.password === password;
    const found = this.accounts.find(isExist);
    this.isAuthorized = found !== undefined;
    return this.isAuthorized;
  }

}
