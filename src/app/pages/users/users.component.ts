import { Component } from '@angular/core';
import { AccountInterface } from 'src/app/types/Account.Interface';
import { accounts } from 'src/app/types/data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  accountList: AccountInterface[] = [...accounts];
  checked: boolean = false;
}
