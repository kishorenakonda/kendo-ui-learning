import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppEventsComponent } from './components/app-events/app-events.component';
import { KendofeatureComponent } from './components/kendofeature/kendofeature.component';
import { ScssLearningComponent } from './components/scss-learning/scss-learning.component';
import { SpecialCharacterQueryparamComponent } from './components/special-character-queryparam/special-character-queryparam.component';
import { SpecialCharacterRouterparamComponent } from './components/special-character-routerparam/special-character-routerparam.component';
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
  },
  {
    path: "special-character-router-param/:id",
    component: SpecialCharacterRouterparamComponent
  },
  {
    path: "special-character-query-param",
    component: SpecialCharacterQueryparamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
