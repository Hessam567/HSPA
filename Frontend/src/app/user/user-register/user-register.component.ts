import { AlertifyService } from './../../services/alertify.service';
import { IUser } from './../../model/IUser';
import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  //user: any[];
  // user: any;
  user:IUser;
  userSubmitted: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private alertifyService:AlertifyService
  ) {}

  ngOnInit() {
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl('Merkel', Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(6),
    //     ]),
    //     confirmPassword: new FormControl(null, [Validators.required]),
    //     mobile: new FormControl(null, [
    //       Validators.required,
    //       Validators.maxLength(10),
    //     ]),
    //   },
    //   this.passwordMatchingValidator
    // );
    this.CreateRegistrationForm();
  }

  CreateRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, [Validators.required]],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }
  //custom validators
  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notmatched: true };
  }
  ///////////////////

  //Getter methods for all form controls
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword1() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  //////////////////////////////////////
  onSubmit() {
    this.userSubmitted = true;

    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      //this.user = Object.assign(this.user, this.registrationForm.value);
      //this.user = this.registrationForm.value;
      // this.userService.addUser(this.user);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.Success("موفق باشید");
    }
    else
    {
      this.alertifyService.Failure("موفق نبود");
    }
  }

  userData():IUser{
    return this.user={
      userName:this.userName.value,
      password:this.password.value,
      email:this.email.value,
      mobile:this.mobile.value
    }
  }
}
