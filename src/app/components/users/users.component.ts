import { Component } from '@angular/core';
import { User } from '../../models/single-user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  users: User[] = [];
  currentSortColumn: string = '';
  isSortAscending: boolean = true;

  constructor(private router: Router, private userService: UserService) {
    this.users = userService.getAllUsers();
  }

  sort(column: string) {
    if (this.currentSortColumn === column) {
      this.isSortAscending = !this.isSortAscending;
    } else {
      this.currentSortColumn = column;
      this.isSortAscending = true;
    }
  
    this.users.sort((a, b) => {
      return this.isSortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
  }

  naviateToUser(id: number) {
    this.router.navigate([`/users/${id}`]);
  }
}
