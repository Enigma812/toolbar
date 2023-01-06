import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function emptyValidator(): ValidatorFn {
    return (control: AbstractControl<any, any>): ValidationErrors | null => {
        const value = control.value;
        if (value === '') {
            return {
                empty: 'Значение не должно быть пустым'
            }
        }
        return null;
    }
}