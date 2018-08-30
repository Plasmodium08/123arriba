import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';

/**
 * Generated class for the SegundaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {

  terceraPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.terceraPage = TerceraPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
  }

}
