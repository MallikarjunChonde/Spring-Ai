import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VipRequestFormComponent } from './vip-request/vip-request.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { AppComponent } from './app.component';
import { LlamatestComponent } from './llamatest/llamatest.component';

const routes: Routes = [
  { path: 'request', component: VipRequestFormComponent },
  {path:'register', component:VolunteerFormComponent},
  {path:'test', component:LlamatestComponent},
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
