import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signUp',
        component: SignUpComponent
      }
    ])
  ],
  declarations: [LoginComponent,SignUpComponent]
})
export class userModule {}
