import { Component, OnInit } from '@angular/core';
import { AppEvents } from '../../../app/types/event.type';
import { EventService } from '../../../app/services/event.service';

@Component({
  selector: 'app-app-events',
  templateUrl: './app-events.component.html',
  styleUrls: ['./app-events.component.css']
})
export class AppEventsComponent implements OnInit {
  public searchByName: String = "";
  public searchByCity: String = "";

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.eventService.broadcast(AppEvents.filterUserListByName, this.searchByName);
    this.eventService.broadcast(AppEvents.filterUserListByCity, this.searchByCity);
  }

}
