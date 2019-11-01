import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepOneComponent} from '../step-one/step-one.component';
import {StepThreeComponent} from '../step-three/step-three.component';
import {StepTwoComponent} from '../step-two/step-two.component';

const routes: Routes = [
  {path: 'step-one', component: StepOneComponent},
  {path: 'step-two', component: StepTwoComponent},
  {path: 'step-three', component: StepThreeComponent},
  {path: '', redirectTo: '/step-one', pathMatch: 'full'},
  {path: '**', component: StepOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
