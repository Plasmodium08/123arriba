
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuintaPage } from '../quinta/quinta';

/**
 * Generated class for the CuartaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuarta',
  templateUrl: 'cuarta.html',
})
export class CuartaPage {

  quintaPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.quintaPage = QuintaPage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuartaPage');
  }

}