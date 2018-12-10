import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage({
  name: 'page-registro'
})
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  private FormRegistro: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder
  ) {

    this.FormRegistro = this.formBuilder.group({
      Nombres: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      Apellidos: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      Nacimiento: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Password1: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      Password2: ['', Validators.compose([Validators.required, Validators.minLength(6)])],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  regForm() {
    console.log(this.FormRegistro.value)
    console.log(this.FormRegistro)

  }

 
}
