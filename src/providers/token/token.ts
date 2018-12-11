import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class TokenProvider {
  token;
  constructor(public http: HttpClient, public events: Events) {
    this.events.subscribe('token:creado', token => {
      this.token = token;
    });
  }

}
