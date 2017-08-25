import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  async register() {
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    console.log(result);
    }
    catch(e){
      console.log(e);
    }
  }

}
