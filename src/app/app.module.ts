import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GridComponent } from './components/grid/grid.component';
import { TableComponent } from './components/table/table.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from "@progress/kendo-angular-label";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';



@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    GridComponent,
    TableComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    InputsModule,
    LabelModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    TooltipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }