import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FIREBASE_CREDENTIALS } from './app.firebase.config';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingItemPage } from '../pages/add-shopping-item/add-shopping-item';
import { EditShoppingItemPage } from '../pages/edit-shopping-item/edit-shopping-item';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ShoppingListPage,
    AddShoppingItemPage,
    EditShoppingItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Inititalize AngularFire with credentials fron Firebase
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the AngularFireDatabaseModule to use database interactions
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ // Used only for pages
    MyApp,
    LoginPage,
    RegisterPage,
    ShoppingListPage,
    AddShoppingItemPage,
    EditShoppingItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
