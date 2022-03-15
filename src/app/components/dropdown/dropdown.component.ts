import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { categories } from '../../../app/data.categories';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  public dropDownItems = categories;
  public defaultItem = { filterBy: 'Filter by Category', index: null };
  public skip: number = 0;
  public filterTerm: number | null = null;

  @Output() filterEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter(event: any) {
    this.filterTerm = event.index;
    this.skip = 0;
    const emitObj = {
      filterTerm: this.filterTerm,
      skip: this.skip
    };
    this.filterEmitter.emit(emitObj);
  } 
}
