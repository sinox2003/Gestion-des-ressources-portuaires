import {Component, ViewChild} from '@angular/core';
import {UsersTableComponent} from "./components/users-table/users-table.component";
import {AddUserComponent} from "./components/add-user/add-user.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UsersTableComponent,
    AddUserComponent,

  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  @ViewChild('tableComponent') table !: UsersTableComponent;

  refreshTable( ){
    this.table.fetchUsers();
  }

}

