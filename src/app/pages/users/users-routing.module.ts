import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users.component";
import { UserCreateComponent } from './features/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },

  {
    path: 'create',
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
