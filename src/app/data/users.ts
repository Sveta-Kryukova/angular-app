import { User } from '../models/single-user.model';

export const users: User[] = [
    { id: 1, name: 'User 1', permissions: ['read'], date: '2023-08-17' },
    { id: 2, name: 'User 2', permissions: ['read', 'write'], date: '2023-08-17' },
    { id: 3, name: 'User 3', permissions: ['read', 'write', 'delete'], date: '2023-08-17' },
    { id: 4, name: 'User 4', permissions: ['read', 'write', 'delete', 'create'], date: '2023-08-17' },
    { id: 5, name: 'User 5', permissions: ['read', 'write', 'delete', 'create', 'update'], date: '2023-08-17' }
  ];