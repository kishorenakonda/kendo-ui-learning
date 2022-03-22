import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';
import { Day, prevDayOfWeek, nextDayOfWeek } from "@progress/kendo-date-math";
import { UserService } from 'src/app/services/user.service';
import { products } from 'src/assets/data/data.products';

@Component({
  selector: 'app-kendofeature',
  templateUrl: './kendofeature.component.html',
  styleUrls: ['./kendofeature.component.css']
})
export class KendofeatureComponent implements OnInit {
  public value: Date = new Date();
  public format = "MM/dd/yyyy HH:mm";

  public range = {
    start: new Date(2018, 10, 4),
    end: new Date(2018, 10, 10),
  };
  public rangeLength = 7;

  public opened = false;

  public listItems: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
  ];
  public selectedGame = 'Cricket';
  public selectedMultipleGame = ['Football'];

  public sliderValue = 10;

  public colors: any[] = [
    {
      to: 25,
      color: "#0058e9",
    },
    {
      from: 25,
      to: 50,
      color: "#37b400",
    },
    {
      from: 50,
      to: 75,
      color: "#ffc000",
    },
    {
      from: 75,
      color: "#f31700",
    },
  ];

  public allUserList: any = [];
  public gridData: any[] = products;

  constructor(private datePipe: DatePipe, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  public handleSelectionRange(range: SelectionRange): void {
    this.range = range;
    let formattedDate = {
      'start': this.datePipe.transform(this.range.start, 'dd-mm-yyyy hh:mm:ss'),
      'end': this.datePipe.transform(this.range.end, 'dd-mm-yyyy hh:mm:ss')
    };
    console.log(formattedDate);
  }

  public close(status: string) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public getUsersList() {
    this.userService.getUser(
      (response: any) => {
        this.allUserList = response;
        console.log(this.allUserList);
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

}
