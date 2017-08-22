import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Subscription } from 'rxjs/Subscription';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemsubscription: Subscription;

  // Reference to our shopping item list inside firebase
  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;
  shoppingItem = {} as ShoppingItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    const shoppingItemId = this.navParams.get('shoppingItemId');
    this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);

    this. shoppingItemsubscription = this.shoppingItemRef$.subscribe(x => this.shoppingItem = x);
  }

  editShoppingItem() {
    this.shoppingItemRef$.update(this.shoppingItem);

    // Reset our shoppingItem
    this.shoppingItem = {} as ShoppingItem;

    // Navigate the user back to the ShoppingListPage
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    // Unsubscribe from the Observable when leaving the page
    this.shoppingItemsubscription.unsubscribe();
  }

}
