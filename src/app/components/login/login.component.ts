import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit(): void {
    // Process checkout data here
    this.isSubmitted = true;
    this.auth.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          this.toastr.success('Registered Successfully!', 'Success');
          this.router.navigate(['/admin/dashboard']);
        }
      },
      error: (err: any) => {
        this.toastr.error('Please provide coorrect credentials!', 'Error');
      },
    });
  }
}
