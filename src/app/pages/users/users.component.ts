import { Component } from '@angular/core';
import { AccountInterface } from 'src/app/types/Account.Interface';
import * as _dayjs from 'dayjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  accountList: AccountInterface[] = [];
  accountListSearching: AccountInterface[] = [];
  checked: boolean = false;
  searchText = '';

  ngOnInit() {
    // load data from localStorage
    const users: any = localStorage.getItem('users');
    this.accountList = [...JSON.parse(users)];
    this.accountListSearching = this.accountList;
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    this.accountListSearching = this.accountList.filter((account) => {
      return (
        account.name.toLowerCase().includes(this.searchText) ||
        account.address.toLowerCase().includes(this.searchText) ||
        account.gender.toLowerCase().includes(this.searchText) ||
        account.account.toLowerCase().includes(this.searchText) ||
        account.email.toLowerCase().includes(this.searchText)
      );
    });
  }
}
