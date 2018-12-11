import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { InicioPage } from '../inicio/inicio';
import { StorageProvider } from '../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  public myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public UsuarioProv: UsuarioProvider,
    public alertCtrl: AlertController,
    public StorageProv: StorageProvider) {
      this.myForm = this.formBuilder.group({
        primerNombre: ['', Validators.compose([Validators.required])],
        primerApellido: ['', Validators.compose([Validators.required])],
        fechaNacimiento: [''],
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
    console.log('ionViewDidLoad RegistrarPage');
  }
  
  registrarse() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.UsuarioProv.PostUsuarioMobile(this.myForm.value)
        .then(data => {
          if(data['Data'] != null){
            this.StorageProv.setStorage(JSON.stringify(data['Data']));
            this.navCtrl.setRoot(InicioPage);
          }
          else{
            this.showAlert('Contraseña y/o password incorrectos')
          }
        });
    }
  }

  showAlert(mensaje){
    let alert  = this.alertCtrl.create({
      buttons : ['Ok'],
      title: 'Error',
      subTitle: mensaje
    });

    alert.present();
  }


}
