import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {CustomValidators} from '../custom-validators.';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;
  user: User = {
    email: '',
    password: '',
    comfirmpassword: '',
    country: '',
    age: 0,
    gender: '',
    phone: ''
  };

  password = '';
  comfirmpassword = '';

  constructor() {
  }
  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      comfirmpassword: new FormControl('', CustomValidators.passwordsMatch(this.password, this.comfirmpassword)),
      country: new FormControl('', Validators.required),
      age: new FormControl(18, Validators.min(19)),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.pattern(/^\+84\d{9,10}$/))
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }

}
