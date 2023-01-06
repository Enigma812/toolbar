import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { answerValidator } from './answer.validator';
import { emptyValidator } from './empty.validator';

interface Check {
  apple: FormControl<string>;
  table: FormControl<string>;
  bear: FormControl<string>;
  column: FormControl<string>;
}

@Component({
  selector: 'app-knowledge-check',
  templateUrl: './knowledge-check.component.html',
  styleUrls: ['./knowledge-check.component.scss']
})
export class KnowledgeCheckComponent {

  public formCheck: FormGroup<Check>
  public answer = false;
  public warning = false;
  public shownAnswerButton = false;
  public validApple = false;
  public invalidApple = false;
  public validTable = false;
  public invalidTable = false;
  public validBear = false;
  public invalidBear = false;
  public validColumn = false;
  public invalidColumn = false;

  constructor() {
    this.formCheck = this.createForm();
  }


  public createForm(): FormGroup<Check> {
    const checkForm = new FormGroup<Check>({
      apple: new FormControl<string>('', { nonNullable: true, validators: [ emptyValidator(), answerValidator('Apple') ] }),
      table: new FormControl<string>('', { nonNullable: true, validators: [ emptyValidator(), answerValidator('Table') ] }),
      bear: new FormControl<string>('', { nonNullable: true, validators: [ emptyValidator(), answerValidator('Bear') ]  }),
      column: new FormControl<string>('', { nonNullable: true, validators: [ emptyValidator(), answerValidator('Column') ]  }),
    });
    return checkForm
  }

  public onCheck() {
    if (this.formCheck.valid) {}
  }

  public shownAnswer(): void {
    this.answer = true;
  }
}
