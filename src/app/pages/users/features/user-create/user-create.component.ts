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
  constructor(private router: Router, private saveDialogConfirmService: SaveDialogConfirmService) { }

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



  data() {
    return {
      account: '',
      name: '',
      dob: null,
      gender: Genders.MALE,
      address: '',
      email: '',
      error: {
        account: '',
        name: '',
        dob: '',
        gender: '',
        address: '',
        email: '',
      } as AccountErrorInterface,
    };
  },
    isValid(): boolean {
      return (
        this.isValidated &&
        !this.error.account &&
        !this.error.name &&
        !this.error.dob &&
        !this.error.gender &&
        !this.error.address &&
        !this.error.email
      );
    },
    isValidated(): boolean {
      return (
        this.account !== '' &&
        this.name !== '' &&
        this.dob !== null &&
        this.address !== '' &&
        this.email !== ''
      );
    },
  },
  watch: {
    account: {
      handler(value) {
        if (value.trim()) {
          this.error.account = '';
        } else {
          this.error.account = 'Tên tài khoản không được bỏ trống.';
        }
      },
    },
    name: {
      handler(value) {
        if (value.trim()) {
          this.error.name = '';
        } else {
          this.error.name = 'Tên không được bỏ trống.';
        }
      },
    },
    address: {
      handler(value) {
        if (value.trim()) {
          this.error.name = '';
        } else {
          this.error.name = 'Địa chỉ không được bỏ trống.';
        }
      },
    },
    email: {
      handler(value) {
        if (value.trim()) {
          this.error.name = '';
        } else {
          this.error.name = 'Email không được bỏ trống.';
        }
      },
    },

    validateAccount() {
      if (!this.account.trim()) {
        this.error.account = 'Tên tài khoản không được bỏ trống.';
      } else {
        const isValid = regexAccount.test(this.account);
        this.error.account = !isValid ? 'Tài khoản không hợp lệ.' : '';
      }
    },
    validateName() {
      if (!this.name.trim()) {
        this.error.name = 'Tên không được bỏ trống.';
      } else {
        const isValid = regexName.test(this.name);
        this.error.name = !isValid ? 'Tên không hợp lệ.' : '';
      }
    },
    validateAddress() {
      if (!this.address.trim()) {
        this.error.address = 'Địa chỉ không được bỏ trống.';
      } else {
        const isValid = regexAddress.test(this.address);
        this.error.address = !isValid ? 'Địa chỉ không hợp lệ.' : '';
      }
    },
    validateEmail() {
      if (!this.email.trim()) {
        this.error.email = 'Email không được bỏ trống.';
      } else {
        const isValid = regexEmail.test(this.email);
        this.error.email = !isValid ? 'Email không hợp lệ.' : '';
      }
    },
  },


}

