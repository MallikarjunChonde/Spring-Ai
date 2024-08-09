// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { VolunteerService } from '../services/volunteer.service'; // Adjust the import path as necessary
// import { Volunteer } from '../models/volunteer.model'; // Adjust the import path as necessary
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-volunteer-form',
//   templateUrl: './volunteer-form.component.html',
//   styleUrls: ['./volunteer-form.component.scss']
// })
// export class VolunteerFormComponent implements OnInit {
//   volunteerForm!: FormGroup;

//   constructor(private fb: FormBuilder, private volunteerService: VolunteerService) {}

//   ngOnInit() {
//     this.volunteerForm = this.fb.group({
//       name: ['', Validators.required],
//       availability: ['', Validators.required],
//       availabilityDate: ['', Validators.required],
//       availabilityTime: ['', Validators.required],
//       postcode: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.volunteerForm.valid) {
//       const volunteer: Volunteer = this.volunteerForm.value;
//       this.volunteerService.registerVolunteer(volunteer).subscribe(
//         (response: Volunteer) => {
//           console.log('Volunteer registered successfully:', response);
//           // Handle success
//         },
//         (error: HttpErrorResponse) => {
//           console.error('Error registering volunteer:', error);
//           // Handle error
//         }
//       );
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VolunteerService } from '../services/volunteer.service';
import { Volunteer } from '../models/volunteer.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.scss']
})
export class VolunteerFormComponent implements OnInit {
  volunteerForm!: FormGroup;

  constructor(private fb: FormBuilder, private volunteerService: VolunteerService) {}

  ngOnInit() {
    this.volunteerForm = this.fb.group({
      name: ['', Validators.required],
      availability: ['', Validators.required],
      availabilityDate: ['', Validators.required],
      availabilityTime: ['', Validators.required],
      postcode: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.volunteerForm.valid) {
      const volunteer: Volunteer = this.volunteerForm.value;
      this.volunteerService.registerVolunteer(volunteer).subscribe(
        (response: Volunteer) => {
          console.log('Volunteer registered successfully:', response);
        },
        (error: HttpErrorResponse) => {
          console.error('Error registering volunteer:', error);
        }
      );
    }
  }
}
