import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  vForm: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  Nuevo() {
    this.vForm = true ;
    // this.navCtrl.push('page-new-quest')
  }

  Registrar() {
    this.navCtrl.push('page-new-quest')
  }
  Cancelar() {
    this.vForm = false;
  }

}
