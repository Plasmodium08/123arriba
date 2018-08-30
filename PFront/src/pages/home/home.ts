import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivacidadPage } from '../privacidad/privacidad';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  privacidadPage: any;
  registroPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.privacidadPage = PrivacidadPage;
    this.registroPage = RegistroPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
