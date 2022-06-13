import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { AppSharedService } from 'src/app/services/appshared.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {

  @Input() filterInput: any;

  public gridItems !: Observable<GridDataResult>
  public skip: number = 0;
  public pageSize: number = 10;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;

  @ViewChild("userGrid") grid!: GridComponent;

  constructor(private productService: ProductService, private appSharedService: AppSharedService) { }

  ngOnInit(): void {
    this.filterTerm = this.filterInput.filterTerm;
    this.skip = this.filterInput.skip;
    this.loadGridItems();

    this.appSharedService.excelExportSubscription.subscribe(status => {
      console.log("status", status);
      if (status) {
        console.log("grid", this.grid);
        this.grid.saveAsExcel();
      }
    })
  }

  private loadGridItems() {
    this.gridItems = this.productService.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  public onChangeFilter(event: any): void {
    this.filterTerm = event.index;
    this.skip = 0;
    this.loadGridItems();
  }

  public onExport() {
    this.grid.saveAsExcel();
  }


}
