import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CuartaPage } from '../cuarta/cuarta';

/**
 * Generated class for the TerceraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tercera',
  templateUrl: 'tercera.html',
})
export class TerceraPage {

  cuartaPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cuartaPage = CuartaPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerceraPage');
  }

}
