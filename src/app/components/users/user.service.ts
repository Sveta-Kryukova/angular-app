//user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../single-user/single-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: 1, name: 'User 1', permissions: ['read'], date: '2023-08-17' },
    { id: 2, name: 'User 2', permissions: ['read', 'write'], date: '2023-08-17' },
    { id: 3, name: 'User 3', permissions: ['read', 'write', 'delete'], date: '2023-08-17' },
    { id: 4, name: 'User 4', permissions: ['read', 'write', 'delete', 'create'], date: '2023-08-17' },
    { id: 5, name: 'User 5', permissions: ['read', 'write', 'delete', 'create', 'update'], date: '2023-08-17' }
  ];

  constructor() { }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}