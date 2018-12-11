import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AzureProvider } from '../../providers/azure/azure';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camara',
  templateUrl: 'camara.html',
})
export class CamaraPage {
  imagen: string = null;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public azure: AzureProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamaraPage');
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.imagen = `data:image/jpeg;base64,${imageData}`;
      console.log(this.imagen);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  subirFoto(){
    console.log(this.imagen);
   //this.subirImagen.postImage(this.image);
   this.azure.uploadBlob(this.imagen);
 }

}
