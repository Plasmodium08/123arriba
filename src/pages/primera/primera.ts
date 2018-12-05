import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SegundaPage } from '../segunda/segunda';
/**
 * Generated class for the PrimeraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primera',
  templateUrl: 'primera.html',
})
export class PrimeraPage {

  segundaPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.segundaPage = SegundaPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimeraPage');
  }

}