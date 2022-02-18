import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private doctor: DoctorsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  addDoctorForm: any;
  isSubmitted: boolean = false;

  ngOnInit(): void {
    // const address = this.fb.group({
    //   region: ['', [Validators.required]],
    //   area: ['', [Validators.required]],
    //   street: ['', [Validators.required]],
    // });
    this.addDoctorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      specialization: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required]],
      description: '',
      fees: ['', [Validators.required]],

      // phones: this.fb.array([]),
      // workAddress: address,
    });
    // this.addDoctorForm.valueChanges.subscribe(console.log);
  }

  get name() {
    return this.addDoctorForm.get('name');
  }
  get email() {
    return this.addDoctorForm.get('email');
  }
  get phone() {
    return this.addDoctorForm.get('phone');
  }
  get description() {
    return this.addDoctorForm.get('description');
  }
  get address() {
    return this.addDoctorForm.get('address');
  }
  get fees() {
    return this.addDoctorForm.get('fees');
  }

  get specialization() {
    return this.addDoctorForm.get('specialization');
  }

  // get workAddress() {
  //   return this.addDoctorForm.get('workAddress').controls;
  // }
  // get phoneForms() {
  //   return this.addDoctorForm.get('phones') as FormArray;
  // }
  // addPhone() {
  //   const phone = this.fb.group({
  //     prefix: [],
  //     number: [],
  //   });
  //   this.phoneForms.push(phone);
  // }
  // deletePhone(i: number) {
  //   this.phoneForms.removeAt(i);
  // }
  onSubmit(): void {
    // Process checkout data here
    if (!this.addDoctorForm.invalid) {
      this.isSubmitted = true;
      this.doctor.createDoctor(this.addDoctorForm.value).subscribe({
        next: (res) => {
          this.toastr.success('Doctor Added Successfully!', 'Success');
          this.router.navigate(['/admin/doctors']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
