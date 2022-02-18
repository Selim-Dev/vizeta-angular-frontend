import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  signUpForm: any;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]],
    });
    // this.addDoctorForm.valueChanges.subscribe(console.log);
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get passwordConfirmation() {
    return this.signUpForm.get('passwordConfirmation');
  }

  onSubmit(): void {
    // Process checkout data here
    this.isSubmitted = true;
    this.auth.signup(this.signUpForm.value).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          this.toastr.success('Registered Successfully!', 'Success');
          this.router.navigate(['/']);
        }
      },
      error: (err: any) => {
        this.toastr.error('Please Check Your Input Data!', 'Error');
      },
    });
  }
}
