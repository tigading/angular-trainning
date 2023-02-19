import { AccountInterface } from './../../../../types/Account.Interface';
import { Component, Input } from '@angular/core';
import Genders from 'src/app/untils/enums/Gender';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() data!: AccountInterface;
  enum: typeof Genders = Genders;
}
