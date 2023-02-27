import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AccountInterface } from '../../../../types/Account.Interface';
import Genders from 'src/app/untils/enums/Gender';
import * as _dayjs from 'dayjs';




@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  constructor(private router: Router) {}
  accountList: AccountInterface[] = [];

  @Input() data!: AccountInterface;
  @Output() removed = new EventEmitter()
  gender: typeof Genders = Genders;

  toDobDisplay(date: any) {
    return _dayjs(date).format('DD/MM/YYYY');
  }

  toEdit(id: number) {
    return this.router.navigate(['/users/' + id]);
  }

  toRemove(id: number){
    this.removed.emit(id)
  }
}
