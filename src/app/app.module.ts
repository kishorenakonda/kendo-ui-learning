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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DropdownComponent, GridComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule, DropDownsModule, BrowserAnimationsModule,
    GridModule, InputsModule, LabelModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }