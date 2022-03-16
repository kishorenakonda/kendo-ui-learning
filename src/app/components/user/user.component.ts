import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor, DataResult, filterBy, orderBy, SortDescriptor } from '@progress/kendo-data-query';
import { UserService } from 'src/app/services/user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public allUserList: any;
  public filteredUserList: any;
  public userList !: Observable<GridDataResult>;
  public flags: any = {
    displayUserForm: Boolean,
    displayUserList: Boolean
  };

  // pagination
  public pageSize: number = 2;
  public skip: number = 0;
  public filterTerm: number | null = null;
  public onChangePageForUser(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadUserGridItems(this.allUserList);
  }

  public sortDescriptor: SortDescriptor[] = [];
  public onSortUser(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    console.log(this.sortDescriptor);
    this.loadUserGridItems(this.allUserList);
  }

  // filters
  public filter !: CompositeFilterDescriptor;
  public filterChange(filter: CompositeFilterDescriptor): void {
    this.filter = filter;
    this.filteredUserList = filterBy(this.allUserList, filter);
    this.loadUserGridItems(this.filteredUserList);
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.flags.displayUserForm = false;
    this.flags.displayUserList = false;
  }

  public userForm: FormGroup = new FormGroup({
    username: new FormControl(),
    userage: new FormControl()
  });

  getUsersList() {
    this.flags.displayUserList = false;
    this.userService.getUsersListService(
      (response: any) => {
        this.allUserList = response;
        this.flags.displayUserList = true;
        this.loadUserGridItems(this.allUserList);
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  loadUserGridItems(userlist: any) {
    this.userList = this.getUsers(userlist, this.skip, this.pageSize, this.sortDescriptor);
  }

  // parser for displaying the data to grid for kendo-grid
  private getUsers(
    list: any,
    skip: number,
    pageSize: number,
    sortDescriptor: SortDescriptor[]
  ): Observable<DataResult> {
    let data;
    data = orderBy(list, sortDescriptor);
    return of({
      data: data.slice(skip, skip + pageSize),
      total: data.length
    });
  }

  onAddUser() {
    this.flags.displayUserForm = true;
  }

  onCreateUser() {
    this.userForm.markAllAsTouched();
    console.log("userForm", this.userForm);
    const postJson = {
      'id': this.allUserList.length + 1,
      'name': this.userForm.get("username")?.value,
      'age': this.userForm.get("userage")?.value,
    }
    console.log("postjson", postJson);
    this.userService.createUser(postJson,
      (response: any) => {
        console.log(response);
        this.userForm.reset();
        this.flags.displayUserForm = false;
        this.getUsersList();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  onClearForm() {
    this.userForm.reset();
  }

  onDeleteUser(rowIndex: number, dataItem: any) {
    console.log(rowIndex);
    console.log(dataItem);
    this.userService.deleteUser(
      dataItem.id,
      (response: any) => {
        console.log(response);
        this.getUsersList();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

}
