import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './single-user.model';
import { UserService } from '../users/user.service'; 

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  
  ngOnInit() {
    const userId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.user = this.userService.getUserById(userId) ?? null;
  }

  goBack() {
    window.history.back();
  }
}
