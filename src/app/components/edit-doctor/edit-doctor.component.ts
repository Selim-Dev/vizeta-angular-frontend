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
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Doctor } from './../../models/Doctor';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss'],
})
export class EditDoctorComponent implements OnInit {
  id: any;
  doctor: any = {
    name: '',
    email: '',
    specialization: '',
    phone: '',
    address: '',
    description: '',
    fees: '',
  };
  addDoctorForm: any;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorsService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /// form
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
    });
    // get id
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    // get doctor
    this.doctorService.getSingleDoctor(this.id).subscribe({
      next: (res) => {
        // console.log(res);
        this.doctor = res.data.doctor;
      },
      error: (err) => {
        console.log(err);
      },
    });
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
  onSubmit(): void {
    // Process checkout data here
    if (!this.addDoctorForm.invalid) {
      this.isSubmitted = true;
      this.doctorService
        .editDoctor(this.id, this.addDoctorForm.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('Doctor Edited Successfully!', 'Success');
            this.router.navigate(['/admin/doctors']);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
