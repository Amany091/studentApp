import { AbstractControl, ValidatorFn } from "@angular/forms"

export function NameValidator(nameReg:RegExp):ValidatorFn{
  return (control: AbstractControl):{ [key:string]:boolean}|null =>{
    console.log('validate fn', control);
    if(control.value.match(nameReg)){
      return {invalid:true}
    }
    return null;
  }
  {}
}
