import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

interface LoginForm {
  login: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-account',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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
      const login = this.form.getRawValue().login;
      const password = this.form.getRawValue().password;

      if (this._accountService.login(login, password)) {
        this._router.navigate(['/start/intro']);
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
      login: new FormControl<string>('', {
        nonNullable: true,
        validators: [ Validators.required ]
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [ Validators.required ]
      }),
    });
    return form;
  }
}
