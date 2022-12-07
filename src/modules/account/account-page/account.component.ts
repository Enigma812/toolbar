import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../app/account.service';

interface LoginForm {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  public form: FormGroup<LoginForm>;

  constructor(
    private readonly _router: Router,
    private readonly _accountService: AccountService
  ) { 
    this.form = this.createForm();
    this.form.setValue({                   // передача информации на html в обратную сторону
      login: '',
      password: ''
    });
    // this.form.patchValue({
    //   login: 'admin'
    // });
  }

  public onClick(): void {
    if (this.form.valid) {
      const login = this.form.value.login;
      const password = this.form.value.password;

      if (login === this._accountService.newLogin && password === this._accountService.newPassword) {
        this._router.navigate(['/start']);
      } else {
        this.form.setErrors({
          invalid: {
            message: 'wrong password'
          }
        })
      }
    } else {
      this.form.controls.login.markAsDirty();
      this.form.controls.password.markAsDirty();
    }
    
  }

  private createForm(): FormGroup<LoginForm> {
    const form = new FormGroup<LoginForm>({
      login: new FormControl<string>('', [
        Validators.required
      ]),
      password: new FormControl<string>('', [
        Validators.required
      ]),
    });
    return form;
  }
}
