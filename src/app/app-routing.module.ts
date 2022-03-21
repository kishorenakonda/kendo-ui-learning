import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendofeatureComponent } from './components/kendofeature/kendofeature.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
