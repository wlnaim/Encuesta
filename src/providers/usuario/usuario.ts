import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TokenProvider } from '../token/token';
import { Events } from 'ionic-angular';
@Injectable()
export class UsuarioProvider {
  token = "CBM7ZaBJmWUsZAFJ8qvO8c7zlIrx5gM5a_P8aCELpDe2F6wLmbaYUdtc_Q7WprOjSbZZ7tlpYX6yn_pXgpCkQqksBzdMQD6WfwJxp3fIOkl6sSmFxlhKUIBZeWFuzcY3cnFrCUgR9Hx-d-_M9-cI55mjlpY8CBcnQYFgruOzBKUR2xycTNecuRob2WLQa6ItNutHFLW8Z4kam0a6B9gMxYv1Blgp9EubT84ryc_6D30wtk7fMRXfohMumJyKFMfle_ikppSLTI8Nkj2n_hgFSEGe1PccbXhEgHh8nt3_V80dR9yywEIKyicey2FmGvf6-rzaYvN75JdZnO8Dr1O1zhEBM85sFcsRT9FfcTG8sJQomDclHPd-n5ifvqvLmd-YV6MtX_qPxknkrszP2dnElnM_bo-ElG0xrJs--lYj7DR2N-ofEcLPv0FfFTUVyNVyW4fBwRjiF-cT_xkhL5byG9VnAkYrAIHNg_leq9lCvIG6Q0OiE-MCPIV2PFeR3w1M";
  url: string = 'http://52.15.150.223:8099/Token';
  urlUsuario = 'http://52.15.150.223:8099/Encuesta';
  body = 'grant_type=password&username=UsuarioCaptura@outlook.com&password=P2$$w0rd';
  tokenHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  cadena = 'Bearer ' + this.TokenProv.token;
  autorizacion = {
    headers: new HttpHeaders({
      'Authorization': this.cadena
    })
  }

  constructor(public http: HttpClient,
    public TokenProv: TokenProvider,
    public events: Events) {
    console.log('Hello UsuarioProvider Provider');
  }

  getToken() {
    return this.http.post(this.url, this.body, this.tokenHeader);
  }

  crearToken() {
    return new Promise(resolve => {
      this.getToken()
        .subscribe(data => {
          this.events.publish('token:creado', data['access_token']);
          this.cadena = 'Bearer ' + this.TokenProv.token;
          this.autorizacion = {
            headers: new HttpHeaders({
              'Authorization': this.cadena
            })
          }
          console.log('Ya he creado el token en crearToken(): ' + this.TokenProv.token);
          resolve()
        });
    });
  }

  // getProductsAPI(ultimaFila) {
  //   return this.http.get(this.utl + '/productos?categoriaId=null&ultimaFila=' + ultimaFila, this.autorizacion)
  //     .toPromise()
  //     .catch(e => {
  //       return this.crearToken()
  //         .then(() => {
  //           return this.http.get(this.urlProductos + '/productos?categoriaId=null&ultimaFila=' + ultimaFila, this.autorizacion)
  //             .toPromise()
  //         });
  //     });
  // }

  Login(usuario) {
    let htttOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cadena,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.urlUsuario + '/Ingresar', usuario, htttOptions)
      .toPromise()
      .catch(e => {
        return this.crearToken()
          .then(() => {
            return this.http.post(this.urlUsuario + '/Ingresar', usuario, htttOptions)
              .toPromise();
          });
      });
  }

  PostUsuarioMobile(usuario) {
    let htttOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cadena,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.urlUsuario + '/Usuario', usuario, htttOptions)
      .toPromise()
      .catch(e => {
        return this.crearToken()
          .then(() => {
            return this.http.post(this.urlUsuario + '/Usuario', usuario, htttOptions)
              .toPromise();
          });
      });
  }

}
