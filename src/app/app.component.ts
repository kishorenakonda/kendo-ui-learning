import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  public filterObj: any;
  public showTable!: boolean;
  public model = {
    tableType: "",
  };
  public paramValue: any;

  public componentList: Array<String> = ['user', 'kendocomponents', 'table', 'appevents', 'scsslearning'];

  constructor(private router: Router) {
    this.showTable = true;
    this.filterObj = {
      filterTerm: null,
      skip: 0
    };

    // this.paramValue = '003366';
    this.paramValue = '003/366'
    // this.paramValue = '003#366';
    // this.paramValue = '003@366'
  }

  onEmitFilter(filterObj: any) {
    this.showTable = false;
    this.filterObj = filterObj;
    setTimeout(() => {
      this.showTable = true;
    }, 100);
  }

  onChangeTableType() {
    if (this.model.tableType.toLowerCase() === 'plaintable') {
      this.router.navigate(['/table']);
    }
  }

  onRouteTo(component: String) {
    console.log(component);
    this.router.navigate([`/${component}`]);
  }

  onRouteToSpecialCharacterRouterParam() {
    this.router.navigate(['/special-character-router-param/' + this.paramValue]);

    // const encodedValue = encodeURIComponent(this.paramValue);
    // this.router.navigate(['/special-character-router-param/' + encodedValue]);
  }

  onRouteToSpecialCharacterQueryParam() {
    this.router.navigate(['/special-character-query-param/'], {
      queryParams: {
        id: this.paramValue
      }
    });
  }
}