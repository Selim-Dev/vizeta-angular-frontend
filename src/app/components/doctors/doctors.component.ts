import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './../../services/doctors.service';
import { Doctor } from './../../models/Doctor';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  closeResult = '';

  constructor(
    private doctorsService: DoctorsService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }

  public getAllDoctors() {
    this.doctorsService.getAllDoctors().subscribe({
      next: (res) => {
        this.doctors = res.data.doctors;
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      },
    });
  }

  onDelete(id: string, deleteModal: any) {
    this.modalService
      .open(deleteModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.doctorsService.deleteDoctor(id).subscribe({
          next: (res) => {
            if (res.status === 'success') {
              this.doctors.splice(
                this.doctors.findIndex((el: any) => el._id === id),
                1
              );
              this.toastr.success('Doctor Deleted Successfully', 'Success');
            }
          },
          error: (err) => {
            this.toastr.error(
              'Something Went Wrong,please login again',
              'Error'
            );
          },
        });
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
