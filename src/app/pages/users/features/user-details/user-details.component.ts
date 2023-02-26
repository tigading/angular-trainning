import { Component } from '@angular/core';
import {AccountInterface} from "../../../../types/Account.Interface";
import Genders from "../../../../untils/enums/Gender";
import {AccountErrorInterface} from "../../../../types/Account.Error.Interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  accountList: AccountInterface[] = [];
  data: AccountInterface = {
    id: 0,
    account: '',
    name: '',
    dob: '',
    gender: Genders.MALE,
    address: '',
    email: '',
    isDeleted: false,
  }

  error: AccountErrorInterface = {
    account: '',
    name: '',
    dob: '',
    gender: '',
    address: '',
    email: '',
    isValid: false,
  }
  ngOnInit() {
    // load data from localStorage
    const users: any = localStorage.getItem('users');
    this.accountList = [...JSON.parse(users)];
    this.data.id = this.accountList.length;
    const user = this.accountList.find(u => u.id === 1);
    if(user){
      this.data =  user;
    }
  }

}
