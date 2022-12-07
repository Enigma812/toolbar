import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../../../app/account.service';

interface FormUser {
  firstName: FormControl<string | null>;
  newLogin: FormControl<string | null>;
  newPassword: FormControl<string | null>;
  nativeLanguage: FormControl<number | null>;
  studingLanguage: FormControl<number | null>;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  public formUser: FormGroup<FormUser>;

  constructor(
    private readonly _accountService: AccountService
  ) {
    this.formUser = this.createForm();
  }


  public createForm(): FormGroup<FormUser> {
    const newUser = new FormGroup<FormUser>({
      firstName: new FormControl<string>(''),
      newLogin: new FormControl<string>(''),
      newPassword: new FormControl<string>(''),
      nativeLanguage: new FormControl<number>(0),
      studingLanguage: new FormControl<number>(0)
    });
    return newUser;
  }

  public onClick(): void {
    if (this.formUser.valid) {
      const firstName = this.formUser.value.firstName;
      const newLogin = this.formUser.value.newLogin;
      const newPassword = this.formUser.value.newPassword;
      const nativeLanguage = this.formUser.value.nativeLanguage;
      const studingLanguage = this.formUser.value.studingLanguage;
      
      if ((newLogin !== null && newLogin !== undefined) && (newPassword !== null && newPassword !== undefined)) {
        this._accountService.newLogin = newLogin;
        this._accountService.newPassword = newPassword;
      }
    }
  }
}
