import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/helper/password-match-validator';

interface SingInForm {
  username:string;
  password:string;
}
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  constructor(private readonly fb: FormBuilder,
    ){}

    signInForm!: FormGroup;
    static validate = {
      username: new RegExp(/^[A-Za-z0-9]+$/),
      password: new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/),
    }
    
  ngOnInit():void{
    this.signInForm = this.initForm();
    console.log('SingIn page');
  }
  onSubmit(form: SingInForm){
    console.log('Form --->', form);
  }

  validate (field:string, validation:string){
    return this.signInForm.get(field)?.touched && this.signInForm.get(field)?.errors?.[validation]
  }
  
  initForm():FormGroup{
    return this.fb.group({
      username:['', [Validators.required, Validators.minLength(6), Validators.pattern(SinginComponent.validate.username)]],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(16),Validators.pattern(SinginComponent.validate.password), passwordMatchValidator]],
    })
  }
}
