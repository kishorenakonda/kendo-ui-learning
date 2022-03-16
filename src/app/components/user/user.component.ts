import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor, DataResult, filterBy, orderBy, SortDescriptor } from '@progress/kendo-data-query';
import { UserService } from 'src/app/services/user.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';

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
    this.userService.getUser(
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

  public onEditUser({ sender, rowIndex, dataItem }: any) {
    const editUserForm = new FormGroup({
      // 'id': new FormControl(dataItem.id),
      'name': new FormControl(dataItem.name, Validators.required),
      'age': new FormControl(dataItem.age)
    });

    // make the row as edit mode, with the `FormGroup` build above
    sender.editRow(rowIndex, editUserForm);
  }

  public onUpdateUser({ sender, rowIndex, formGroup, dataItem }: any) {
    // collect the current state of the form
    const user: User = formGroup.value;
    user['id'] = dataItem.id;
    console.log("user", user);
    console.log("dataItem", dataItem);

    // update the data source
    this.userService.updateUser(user,
      (response: any) => {
        console.log(response);
        this.getUsersList();
      },
      (error: any) => {
        console.error(error);
      }
    );

    // close the editor, that is, revert the row back into view mode
    sender.closeRow(rowIndex);
  }

  public onCancel({ sender, rowIndex }: any) {
    // close the editor for the given row
    sender.closeRow(rowIndex)
  }

  public onDeleteUser({ dataItem }: any) {
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
