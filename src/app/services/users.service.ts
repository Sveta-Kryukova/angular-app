import { Injectable } from '@angular/core';
import { User } from '../models/single-user.model';
import { users } from 'src/app/data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localStorageKey = 'user_data';
  private users: User[] = users;

  constructor() {
    this.loadsUsersFromLocalStorage();
  }

  private loadsUsersFromLocalStorage() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.users = JSON.parse(storedData);
    } else {
      this.users = users;
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