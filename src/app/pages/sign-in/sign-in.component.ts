import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm?: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      subscribe: false,
    });
  }

  signIn(): void {
    this.signInForm?.markAsTouched();

    if (this.signInForm?.valid) {
      //login
      this.signInForm.reset();
    }

    console.log('login form value', this.signInForm?.value);
  }
}
