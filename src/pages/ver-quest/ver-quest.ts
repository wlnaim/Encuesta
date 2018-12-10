import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'page-ver-quest'
})
@Component({
  selector: 'page-ver-quest',
  templateUrl: 'ver-quest.html',
})
export class VerQuestPage {

  public Quets: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Quets = this.navParams.get('Quets');
    console.log(this.Quets);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerQuestPage');
  }

}
