import { Component, OnInit } from '@angular/core';
import { AppEvents } from '../../../app/types/event.type';
import { EventService } from '../../../app/services/event.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-app-events',
  templateUrl: './app-events.component.html',
  styleUrls: ['./app-events.component.css']
})
export class AppEventsComponent implements OnInit {
  public searchByName: String = "";
  public searchByCity: String = "";

  constructor(private eventService: EventService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCountries(
      (resp: any) => {
        console.log("resp", resp);
      },
      (err: any) => {

      }
    );
  }

  onSearch() {
    this.eventService.broadcast(AppEvents.filterUserListByName, this.searchByName);
    this.eventService.broadcast(AppEvents.filterUserListByCity, this.searchByCity);
  }

}
