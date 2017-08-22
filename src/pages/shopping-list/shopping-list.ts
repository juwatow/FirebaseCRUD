import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingItemPage } from '../add-shopping-item/add-shopping-item';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  // Reference to our shopping item list inside firebase
  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetController: ActionSheetController) {
    this.shoppingListRef$ = this.database.list('shopping-list');
  }

  /*
     Display an action sheet that gives the user the following actions:
     1. Edit the shoppingItem
     2. Delete the shoppingItem
     3. Cancel selection
    */
  selectShoppingItem(shoppingItem: ShoppingItem) {
    this.actionSheetController.create({
      title: `${shoppingItem.itemName}`,
      buttons:[
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditShoppingItemPage, {
              shoppingItemId: shoppingItem.$key
            });
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("the user has selected the cancel option")
          }
        }
      ]
    }).present()
  }

  navigateToAddShoppingItemPage(){
    // Navigate the user to the AddShoppingItemPage
    this.navCtrl.push(AddShoppingItemPage);
  }

}
