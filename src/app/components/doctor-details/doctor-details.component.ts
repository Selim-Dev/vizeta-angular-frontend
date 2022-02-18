import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PublicDoctorsService } from './../../services/public-doctors.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
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
  constructor(
    private route: ActivatedRoute,
    private doctorService: PublicDoctorsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.doctorService.getSingleDoctor(this.id).subscribe({
      next: (res: any) => {
        this.doctor = res.data.doctor;
        console.log(res.data.doctor);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
