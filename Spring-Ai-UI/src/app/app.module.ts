import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { VolunteerService } from './services/volunteer.service';
import { VipRequestFormComponent } from './vip-request/vip-request.component';
import { HomeComponent } from './home/home.component';
import { LlamatestComponent } from './llamatest/llamatest.component';

@NgModule({
  declarations: [
    AppComponent,
    VolunteerFormComponent,
    VipRequestFormComponent,
    HomeComponent,
    LlamatestComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),VolunteerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
