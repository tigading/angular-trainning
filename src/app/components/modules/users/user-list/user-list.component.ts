import { Component, Input } from '@angular/core';
import { AccountInterface } from 'src/app/types/Account.Interface';
import Genders from 'src/app/untils/enums/Gender';
import * as _dayjs from 'dayjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  constructor(private router: Router) {}

  @Input() data!: AccountInterface;
  gender: typeof Genders = Genders;

  toDobDisplay(date: any) {
    return _dayjs(date).format('DD/MM/YYYY');
  }

  toEdit(id: number) {
    return this.router.navigate(['/users/' + id]);
  }
}
