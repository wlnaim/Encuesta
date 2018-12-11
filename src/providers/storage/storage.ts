import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {
  public usuario: string;

  constructor(public storage: Storage) {
    this.getStorage();
  }

  getStorage() {
    this.storage.get('UsuarioId').then(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

  waitForStorage() {
    return new Promise(resolve => {
      this.storage.ready()
        .then(() => {
          this.storage.get('UsuarioId')
            .then(data => {
              this.usuario = data;
              resolve(data)
            });
        });
    });
  }

  setStorage(usuario: string) {
    this.storage.set('UsuarioId', usuario);
  }

  deleteStorage() {
    this.storage.remove('UsuarioId')
    .then( () => {
      this.usuario = null;
    })
  }

}
