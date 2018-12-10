import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';


@IonicPage({
  name: 'page-new-quest'
})
@Component({
  selector: 'page-new-quest',
  templateUrl: 'new-quest.html',
})
export class NewQuestPage {

  public Quets: any = [{
    Abiertas: [],
    Cerrada: []

  }];

  public Tipo: any = [
    { Quets: "Abierta", Tipo: 1, Activo: "blanco" },
    { Quets: "Cerrada", Tipo: 2, Activo: "blanco" }
  ];

  public Respuestas: any = [];
  public Opciones: any = [""];

  Pregunta: string = "";

  i: number = 0;


  Vabierta: boolean = false;
  Vcerrada: boolean = false;
  VaddOpciones: boolean = false;
  VMensaje: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewQuestPage');
  }

  SelectTipo(Tipo) {
    this.VMensaje = false;
    if (Tipo == 1) {
      this.Vabierta = true;
      this.Vcerrada = false;
      this.Tipo[0].Activo = "azul"
      this.Tipo[1].Activo = "blanco"
      this.VaddOpciones = false;
    } else if (Tipo) {
      this.Vabierta = false;
      this.Vcerrada = true;
      this.Tipo[1].Activo = "azul"
      this.Tipo[0].Activo = "blanco"
    }
  }

  NewAbierta() {
    if (this.Pregunta == "") {
      let alert = this.alertCtrl.create({
        title: 'Alerta',
        subTitle: 'Escriba su pregunta',
        buttons: ['Dismiss']
      });
      alert.present();
    } else {
      if (this.Vabierta == true) {
        this.Quets[0].Abiertas.push({Tipo: 1, Pregunta: this.Pregunta})
        this.Pregunta = "";
        console.log(this.Quets);

      } else if (this.Vcerrada == true) {
        if (this.Opciones.length < 2 || this.Respuestas[0] == "" || this.Respuestas[1] == "" ) {
          let alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: 'Escriba 2 opciones minimo',
            buttons: ['Dismiss']
          });
          alert.present();
        } else {
          this.guardarOpciones()
          let QuetsCerrada = {Tipo: 2, Pregunta: this.Pregunta, Opciones: this.Opciones }
          this.Quets[0].Cerrada.push(QuetsCerrada);
          this.Pregunta = "";
          this.VaddOpciones = true;
          console.log(this.Quets);

          this.Opciones = [""];
        }
      }
    }
   
  }

  masOpciones() {
    if (this.Opciones.length < 4) {
      this.Opciones.push("");
      console.log("ADD")
      console.log(this.Opciones)
      this.Opciones.push();
    } else {
      let toast = this.toastCtrl.create({
        message: 'El Maximo de opcione permitidas son "4"',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }

  }
  menosOpciones() {
    this.Opciones.pop("");
    console.log("DEL")
    console.log(this.Opciones)
    this.Respuestas.pop();
  }

  cambiaLado(valor, i) {
    this.Respuestas[i] = valor;
    console.log(this.Respuestas);
    console.log(valor, i);
  }


  guardarOpciones() {
    for (let index = 0; index < this.Respuestas.length; index++) {
      this.Opciones[index] = this.Respuestas[index];
    }
    console.log(this.Opciones)
  }

  delQuets(quest, i ){
    console.log(quest, i);
    if(quest.Tipo == 1 ){
      console.log("pregunta abierta")
      this.Quets[0].Abiertas.splice(i,1)
    }else{
      console.log("Pregnta cerra")
      this.Quets[0].Cerrada.splice(i, 1)
    }
  }


  Enviar(){
    this.navCtrl.push('page-ver-quest', { Quets: this.Quets})
  }





}







