import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppEventsComponent } from './components/app-events/app-events.component';
import { KendofeatureComponent } from './components/kendofeature/kendofeature.component';
import { ScssLearningComponent } from './components/scss-learning/scss-learning.component';
import { TableComponent } from './components/table/table.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "kendocomponents",
    component: KendofeatureComponent
  },
  {
    path: "appevents",
    component: AppEventsComponent
  },
  {
    path: "scsslearning",
    component: ScssLearningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
