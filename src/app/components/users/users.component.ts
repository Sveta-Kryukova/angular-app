import { Component } from '@angular/core';
import { User } from '../single-user/single-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [
    { id: 1, name: 'User 1', permissions: ['read'], date: '2023-08-17' },
    { id: 2, name: 'User 2', permissions: ['read', 'write'], date: '2023-08-17' },
    { id: 3, name: 'User 3', permissions: ['read', 'write', 'delete'], date: '2023-08-17' },
    { id: 4, name: 'User 4', permissions: ['read', 'write', 'delete', 'create'], date: '2023-08-17' },
    { id: 5, name: 'User 5', permissions: ['read', 'write', 'delete', 'create', 'update'], date: '2023-08-17' }
  ];
  currentSortColumn: string = '';
  isSortAscending: boolean = true;

  constructor(private router: Router) { }

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
