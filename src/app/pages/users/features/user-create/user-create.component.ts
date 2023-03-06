import { SaveDialogConfirmService } from './../../../../types/save-dialog-confirm.service';
import { AccountErrorInterface } from '../../../../types/Account.Error.Interface';
import { Component } from '@angular/core';
import { AccountInterface } from 'src/app/types/Account.Interface';
import Genders from 'src/app/untils/enums/Gender';
import * as _dayjs from 'dayjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent {
  SaveDialogConfirmService: any;
  constructor(private router: Router, private saveDialogConfirmService: SaveDialogConfirmService) {}

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
  };

  error: AccountErrorInterface = {
    account: '',
    name: '',
    dob: '',
    gender: '',
    address: '',
    email: '',
    isValid: false,
  };

  ngOnInit() {
    // load data from localStorage
    const users: any = localStorage.getItem('users');
    this.accountList = [...JSON.parse(users)];
    this.data.id = this.accountList.length;

    if (this.data.dob) {
      this.data.dob = _dayjs(this.data.dob).format('DD/MM/YYYY');
    }
  }

  async saved() {
    this.accountList.push(this.data);
    localStorage.setItem('users', JSON.stringify(this.accountList));
    await this.router.navigate(['/users']);
  }

  async cancel() {
    await this.router.navigate(['/users']);
  }

  async save() {
    this.saveDialogConfirmService
      .openSaveConfirmDialog(this.data)
  }

  get isValid(): boolean {
    return (
      this.isValidated &&
      !this.error.account &&
      !this.error.name &&
      !this.error.dob &&
      !this.error.gender &&
      !this.error.address &&
      !this.error.email
    );
  }

  get isValidated(): boolean {
    return (
      this.data.account !== '' &&
      this.data.name !== '' &&
      this.data.dob !== null &&
      this.data.address !== '' &&
      this.data.email !== ''
    );
  }
}

