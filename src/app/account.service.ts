import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public newLogin: string = '';
  public newPassword: string = '';

  constructor() { }
}
