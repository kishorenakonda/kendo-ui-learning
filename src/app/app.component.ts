import { Component } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  public filterObj: any;
  public showTable!: boolean;

  constructor() {
    this.showTable = true;
    this.filterObj = {
      filterTerm: null,
      skip: 0
    };
  }

  onEmitFilter(filterObj: any) {
    this.showTable = false;
    this.filterObj = filterObj;
    setTimeout(() => {
      this.showTable = true;
    }, 100);
  }
}