import { AccountErrorInterface } from './../../../../types/Account.Error.Interface';
import { Component } from '@angular/core';
import { AccountInterface } from 'src/app/types/Account.Interface';
import Genders from 'src/app/untils/enums/Gender';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  accountList: AccountInterface[] = [];
  gender: typeof Genders = Genders;
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

  saved(){
    this.accountList.push(this.data)
    localStorage.setItem('users', JSON.stringify(this.accountList));
  }
}
