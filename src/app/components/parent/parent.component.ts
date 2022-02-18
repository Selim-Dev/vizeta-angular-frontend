import { Component, OnInit } from '@angular/core';
import { Doctor } from './../../models/Doctor';
import { PublicDoctorsService } from './../../services/public-doctors.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor(private doctorsService: PublicDoctorsService) {}
  doctors: Doctor[] = [];
  ngOnInit(): void {
    this.getAllDoctors();
  }
  public getAllDoctors() {
    this.doctorsService.getAllDoctors().subscribe((res) => {
      this.doctors = res.data.doctors;
      console.log(res.data);
    });
  }
}
