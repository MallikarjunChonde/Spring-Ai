import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VolunteerService } from '../services/volunteer.service';
import { VIPRequest } from '../models/vip-request.model';
import { Volunteer } from '../models/volunteer.model';

@Component({
  selector: 'app-vip-request',
  templateUrl: './vip-request.component.html',
  styleUrls: ['./vip-request.component.scss']
})
export class VipRequestFormComponent implements OnInit {
  vipRequestForm!: FormGroup;
  volunteers: Volunteer[] = [];

  constructor(private fb: FormBuilder, private volunteerService: VolunteerService) {}

  ngOnInit() {
    this.vipRequestForm = this.fb.group({
      vipName: ['', Validators.required],
      preference: ['', Validators.required],
      requestDetails: ['', Validators.required],
      postalCode: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  submitRequest() {
    if (this.vipRequestForm.valid) {
      const request: VIPRequest = this.vipRequestForm.value;
      console.log('VIP Request submitted:', request);
      this.findVolunteers(request);
    }
  }
  
  findVolunteers(request: VIPRequest) {
    console.log('Requesting volunteers with:', request); // Log the request data
    this.volunteerService.findVolunteersByRequest(request).subscribe(
      (volunteers: Volunteer[]) => {
        console.log('Volunteers found:', volunteers); // Log the response data
        this.volunteers = volunteers;
      },
      (error: any) => {
        console.error('Error finding volunteers:', error);
      }
    );
  }
  
  // matchVolunteers(request: VIPRequest) {
  //   console.log('Requesting volunteers with:', request); // Log the request data
  //   this.volunteerService.matchVolunteers(request).subscribe(
  //     (volunteers: Volunteer[]) => {
  //       console.log('Volunteers found:', volunteers); // Log the response data
  //       this.volunteers = volunteers;
  //     },
  //     (error: any) => {
  //       console.error('Error finding volunteers:', error);
  //     }
  //   );
  // }
}
