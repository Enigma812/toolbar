import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function answerValidator(answer: string): ValidatorFn {
    return (control: AbstractControl<any, any>): ValidationErrors | null => {
        if (control.value !== answer) {
            return {
                wrongAnswer: 'Ответ неверен'
            };
        }
        return null;
    }
}