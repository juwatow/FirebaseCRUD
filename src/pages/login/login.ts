import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  async login() {
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      if(result){
        this.navCtrl.setRoot(ShoppingListPage);
      }
    }
    catch (e){
      console.log(e);
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
