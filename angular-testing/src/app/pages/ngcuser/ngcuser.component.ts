import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from 'src/app/directives/user.interface';

@Component({
  selector: 'app-ngcuser',
  templateUrl: './ngcuser.component.html',
  styleUrls: ['./ngcuser.component.scss'],
})
export class NgcuserComponent implements DoCheck {
  @Input() users: User[] = [];

  isDescOrder = false;

  size: number = 0;

  constructor() {}

  ngDoCheck() {
    // angular is not able to detect changes itself like for property of objhect

    // condition is important to prevent unwanted executions for performance reasons
    if (this.users.length === this.size) {
      return;
    }

    this.size = this.users.length;

    this.sortUsers();
  }

  private sortUsers() {
    this.users.sort((user1, user2) => {
      const orderDirection = user2.name.localeCompare(user1.name);

      return this.isDescOrder ? orderDirection : -orderDirection;
    });
  }

  changeOrder(isDesc: boolean) {
    this.isDescOrder = isDesc;
    this.sortUsers();
  }
}
