import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionRange } from '@progress/kendo-angular-dateinputs';
import { UserService } from 'src/app/services/user.service';
import { products } from 'src/assets/data/data.products';

export class FlagsModel {
  constructor(
    public displaySubmitButton: boolean,
  ) { }
}

@Component({
  selector: 'app-kendofeature',
  templateUrl: './kendofeature.component.html',
  styleUrls: ['./kendofeature.component.css']
})
export class KendofeatureComponent implements OnInit, AfterViewInit {
  @ViewChild("submitBtn") submitButtonRef!: ElementRef;

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

  public kendomenuitems: any[] = [
    {
      text: 'Item1',
      items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }] }]
    },
    {
      text: 'Item2',
      items: [{ text: 'Item2.1' }]
    }
  ];

  public alModelInputRecord: any = {};

  public flags: any = {
    displaySubmitButton: Boolean
  };

  public selectableSettings: any = {
    multiple: true,
    checkboxOnly: true
  }

  public switchValue: boolean = true;

  constructor(private datePipe: DatePipe, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.alModelInputRecord['paidOnCommitted'] = false;
    this.flags.displaySubmitButton = true;

    this.getUsersList();
    this.listenToActionIcons();
  }

  ngAfterViewInit(): void {
    this.scrollToButton();
  }

  public listenToActionIcons() {
    const actionIconElement = document.getElementById("action-icon");
    actionIconElement?.addEventListener('keypress', (event) => {
      if (event.key == 'Enter') {
        this.router.navigate(['/appevents']);
      }
    });
  }

  public scrollToButton() {
    let buttonElement = document.getElementById('submit-btn');
    if (buttonElement) {
      buttonElement.scrollIntoView();
    }
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

  public onValueChange(event: any) {
    console.log(event);
  }

  public onNavigateTo(event: any) {
    console.log("event from navigate", event);
    this.router.navigate(['/appevents']);
  }

  public onSubmit() {
    alert("Submit is clicked");
  }

  public selectAllChange(event: any) {
    console.log("select all evet", event);
  }

  public onSwitchValueChange() {
    console.log("switch value");
  }
}
