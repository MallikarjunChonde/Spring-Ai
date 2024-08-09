import { Time } from "@angular/common";

export interface Volunteer {
    id: number;
    name: string;
    availability: string;
    availabilityDate:Date;
    availabilityTime:Time;
    postcode: string;
  }


