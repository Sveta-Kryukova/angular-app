import { Injectable } from '@angular/core';
import { User } from '../single-user/single-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localStorageKey = 'user_data';
  private users: User[] = [];

  constructor() {
    this.loadsUsersFromLocalStorage();
  }

  private loadsUsersFromLocalStorage() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.users = JSON.parse(storedData);
    } else {
      this.users = [
    { id: 1, name: 'User 1', permissions: ['read'], date: '2023-08-17' },
    { id: 2, name: 'User 2', permissions: ['read', 'write'], date: '2023-08-17' },
    { id: 3, name: 'User 3', permissions: ['read', 'write', 'delete'], date: '2023-08-17' },
    { id: 4, name: 'User 4', permissions: ['read', 'write', 'delete', 'create'], date: '2023-08-17' },
    { id: 5, name: 'User 5', permissions: ['read', 'write', 'delete', 'create', 'update'], date: '2023-08-17' }
  ];
  this.saveUserData();
  }
}

private saveUserData() {
  localStorage.setItem(this.localStorageKey, JSON.stringify(this.users));
}

getAllUsers(): User[] {
  return this.users;
}

getUserById(id: number): User | undefined {
  return this.users.find(user => user.id === id);
}
}