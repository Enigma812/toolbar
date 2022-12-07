import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface FormUser {
  firstName: FormControl<string | null>;
  newLogin: FormControl<string | null>;
  newPassword: FormControl<string | null>;
  nativeLanguage: FormControl<string | null>;
  studingLanguage: FormControl<string | null>;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  @Output() 
  public login: EventEmitter<string> = new EventEmitter();
  
  @Output() 
  public password: EventEmitter<string> = new EventEmitter();

  public formUser: FormGroup<FormUser>;

  constructor() {
    this.formUser = this.createForm();
    this.formUser.setValue({
      firstName: '',
      newLogin: '',
      newPassword: '',
      nativeLanguage: '',
      studingLanguage: '',
    });
  }


  public createForm(): FormGroup<FormUser> {
    const newUser = new FormGroup<FormUser>({
      firstName: new FormControl<string>(''),
      newLogin: new FormControl<string>(''),
      newPassword: new FormControl<string>(''),
      nativeLanguage: new FormControl<string>(''),
      studingLanguage: new FormControl<string>('')
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
      
      if ((newLogin !== null && undefined) && (newPassword !== null && undefined)) {
        this.login.emit(newLogin);
        this.password.emit(newPassword);
      }
    }
  }
}
