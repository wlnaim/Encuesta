import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private FormLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder ) {

    this.FormLogin = this.formBuilder.group({
      Email: ['', Validators.compose([Validators.required, Validators.email]) ],
      Password: ['', Validators.compose([Validators.required, Validators.minLength(6)  ])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logForm(){
    console.log(this.FormLogin.value)
    console.log(this.FormLogin)
    this.navCtrl.setRoot('page-inicio');
   
  }
  registrar(){
    this.navCtrl.push('page-registro');
  }

}
