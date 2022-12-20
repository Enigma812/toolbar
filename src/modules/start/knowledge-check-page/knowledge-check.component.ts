import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      apple: new FormControl<string>('', { nonNullable: true }),
      table: new FormControl<string>('', { nonNullable: true }),
      bear: new FormControl<string>('', { nonNullable: true }),
      column: new FormControl<string>('', { nonNullable: true }),
    });
    return checkForm
  }

  public onCheck() {
    if (this.formCheck.valid) {
      const apple = this.formCheck.value.apple;
      const table = this.formCheck.value.table;
      const bear = this.formCheck.value.bear;
      const column = this.formCheck.value.column;
      if (apple === 'Apple') {
        this.validApple = true;
      } else {
        if (apple !== '' ) {
          this.shownAnswerButton = true;
        }
        this.invalidApple = true;
      };
      if (table === 'Table') {
        this.validTable = true;
      } else {
        if (table !== '' ) {
          this.shownAnswerButton = true;
        }
        this.invalidTable = true;
      };
      if (bear === 'Bear') {
        this.validBear = true;
      } else {
        if (bear !== '' ) {
          this.shownAnswerButton = true;
        }
        this.invalidBear = true;
      };
      if (column === 'Column') {
        this.validColumn = true;
      } else {
        if (column !== '' ) {
          this.shownAnswerButton = true;
        }
        this.invalidColumn = true;
      };
      if (apple === '' && table === '' && bear === '' && column === '') {
        this.warning = true;
      };
    }
  }

  public shownAnswer(): void {
    this.answer = true;
  }
}
