import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/helper/password-match-validator';

interface RegisterForm {
  username: string;
  email: string;
  password:string;
  confirmPassword:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private readonly fb: FormBuilder,
    ){}

    registerForm!: FormGroup;
    static validate = {
      username: new RegExp(/^[A-Za-z0-9]+$/),
      password: new RegExp(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/),
    }
    
  ngOnInit():void{
    this.registerForm = this.initForm();
    console.log('Register page');
  }
  onSubmit(form: RegisterForm){
    console.log('Form --->', form);
  }

  validate (field:string, validation:string){
    return this.registerForm.get(field)?.touched && this.registerForm.get(field)?.errors?.[validation]
  }
  
  initForm():FormGroup{
    return this.fb.group({
      username:['', [Validators.required, Validators.minLength(6), Validators.pattern(RegisterComponent.validate.username)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(16),Validators.pattern(RegisterComponent.validate.password), passwordMatchValidator]],
      confirmPassword:['', [Validators.required, Validators.minLength(8), passwordMatchValidator]],
    })
  }
}
