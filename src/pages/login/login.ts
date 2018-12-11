import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InicioPage } from '../inicio/inicio';
import { RegistroPage } from '../registro/registro';
import { RegistrarPage } from '../registrar/registrar';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { StorageProvider } from '../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private FormLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public UsuarioProv: UsuarioProvider,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public StorageProv: StorageProvider ) {

    this.FormLogin = this.formBuilder.group({
      Email: ['', Validators.compose([Validators.required, Validators.email]) ],
      Password: ['', Validators.compose([Validators.required, Validators.minLength(6)  ])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logForm(){
    if(this.FormLogin.valid){
      this.UsuarioProv.Login(this.FormLogin.value)
      .then( data => {
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
  registrar(){
    this.navCtrl.push(RegistrarPage);
  }

  //Contraseña y/o password incorrectos
  showAlert(mensaje){
    let alert  = this.alertCtrl.create({
      buttons : ['Ok'],
      title: 'Error',
      subTitle: mensaje
    });

    alert.present();
  }

}
