import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/helper/password-match-validator';
import { ActivatedRoute } from '@angular/router';

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
    //private readonly route: ActivatedRoute
    ){}
    static validate = {
      username: new RegExp('/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{6,}$/'),
      password: new RegExp('/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/'),
    }
    
  ngOnInit():void{
    console.log('Register page')
  }
  onSubmit(form: RegisterForm){
    console.log('Form --->', form)
  }

  
  initForm():FormGroup{
    return this.fb.group({
      username:['', [Validators.required, Validators.minLength(6), Validators.pattern(RegisterComponent.validate.username)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.pattern(RegisterComponent.validate.password)]],
      confirmPassword:['', [Validators.required, Validators.minLength(8), passwordMatchValidator]],
    })
  }
}
