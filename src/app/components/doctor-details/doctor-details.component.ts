import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DoctorsService } from './../../services/doctors.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.sass'],
})
export class DoctorDetailsComponent implements OnInit {
  id: any;
  doctor: any;
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}
