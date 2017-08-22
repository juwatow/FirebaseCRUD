import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddShoppingItemPage } from '../add-shopping-item/add-shopping-item';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToAddShoppingItemPage(){
    // Navigate the user to the AddShoppingItemPage
    this.navCtrl.push(AddShoppingItemPage);
  }

}
