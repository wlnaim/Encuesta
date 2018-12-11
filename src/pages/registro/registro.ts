import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioProvider } from '../../providers/usuario/usuario';



@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  public myForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public UsuarioProv: UsuarioProvider
  ) {

    this.myForm = this.formBuilder.group({
      primerNombre: ['', Validators.compose([Validators.required])],
      primerApellido: ['', Validators.compose([Validators.required])],
      fechaNacimiento: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      calle: ['', Validators.compose([Validators.required])],
      segundoNombre: [''],
      segundoApellido: [''],
      telefono: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      //confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrarse() {
    console.log(this.myForm.value);
    if (!this.myForm.valid) {
      this.UsuarioProv.PostUsuarioMobile(this.myForm)
        .then(data => {

        })
    }
  }


}
