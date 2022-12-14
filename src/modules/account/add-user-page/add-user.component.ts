import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

interface FormUser {
  firstName: FormControl<string>;
  newLogin: FormControl<string>;
  newPassword: FormControl<string>;
  nativeLanguage: FormControl<number>;
  studingLanguage: FormControl<number>;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  public formUser: FormGroup<FormUser>;
  public completed = false;

  constructor(
    private readonly _accountService: AccountService,
    private readonly _router: Router
  ) {
    this.formUser = this.createForm();
  }


  public createForm(): FormGroup<FormUser> {
    const newUser = new FormGroup<FormUser>({
      firstName: new FormControl<string>('', { nonNullable: true }),
      newLogin: new FormControl<string>('', { nonNullable: true }),
      newPassword: new FormControl<string>('', { nonNullable: true }),
      nativeLanguage: new FormControl<number>(0, { nonNullable: true }),
      studingLanguage: new FormControl<number>(0, { nonNullable: true })
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
      this.formUser.reset();
      this.completed = true;
      this._accountService.add({
        name: firstName ?? '',
        login: newLogin  ?? '',
        password: newPassword ?? '',
        nativeLanguage: nativeLanguage ?? 0,
        studingLanguage: studingLanguage ?? 0
      })
      setTimeout(() => {this.completed = false, this._router.navigate(['/account/login'])}, 2000);

    }
  }
}
