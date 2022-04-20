import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { AppEvents } from 'src/app/types/event.type';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public userList: Array<User> = [];
  public allUserList: Array<User> = [];
  public searchByName: String = "";
  public searchByCity: String = "";

  constructor(private eventService: EventService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.eventService.receive(AppEvents.filterUserListByName, this.filterUserListByName);
    this.eventService.receive(AppEvents.filterUserListByCity, this.filterUserListByCity);
  }

  filterUserListByName = (name: any) => {
    this.searchByName = name;
    if (this.searchByName && this.searchByName.length > 0) {
      this.userList = this.allUserList.filter(userObj => { return userObj.name === this.searchByName });
    } else {
      this.userList = this.allUserList;
    }
  }

  filterUserListByCity = (city: any) => {
    this.searchByCity = city;
    if (this.searchByCity && this.searchByCity.length > 0) {
      this.userList = this.allUserList.filter(userObj => { return userObj.city === this.searchByCity });
    } else {
      this.userList = this.allUserList;
    }
  }

  getUsersList() {
    this.userService.getUser(
      (resp: Array<User>) => {
        this.allUserList = resp;
        this.userList = resp;
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

}
