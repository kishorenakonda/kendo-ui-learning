import { Component, Input, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() filterInput: any;

  public gridItems !: Observable<GridDataResult>
  public skip: number = 0;
  public pageSize: number = 10;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.filterTerm = this.filterInput.filterTerm;
    this.skip = this.filterInput.skip;
    this.loadGridItems();
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

}
