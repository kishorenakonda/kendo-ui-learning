import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public filterObj: any;
  public showTable!: boolean;
  public model = {
    tableType: "",
  };

  constructor(private router: Router) {
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

  ngOnInit(): void {

  }

}
