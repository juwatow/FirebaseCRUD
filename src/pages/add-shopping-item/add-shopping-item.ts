import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  shoppingItem = {} as ShoppingItem;

  // Reference to our shopping item list inside firebase
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem() {
    /*
    Create a new anonymous object and convert itemNumber to number
    Push this to our Firebase database under the 'shopping-list' node
     */
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itenNumber: Number(this.shoppingItem.itemNumber)
    });

    // Reset our shoppingItem
    this.shoppingItem = {} as ShoppingItem;

    // Navigate the user back to the ShoppingListPage
    this.navCtrl.pop();
  }

}
