import { Component, OnInit} from '@angular/core';
import { UserService } from '../userservice.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userService: UserService){
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }

  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }
}
