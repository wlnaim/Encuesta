import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as azure from 'azure-storage';
import * as uid from 'uuid';

@Injectable()
export class AzureProvider {
  azureBlob;
  blobService;
  accountName = 'change';
  accessKey = 'T8Yw3ZIfNu6D9vLtD+PR8d4AoMqD1LnfqiYHetU3Dh8F3E22P3ZOuvr/IerIyQp2sSzqpS2O5q0k9PQha2pF7w==';
  file: any;

  constructor(public http: HttpClient) {
    // this.azureBlob = azure.createTableService(this.accountName, this.accessKey);
  }*



  uploadBlob(item) {
    let blobService = azure.createBlobService('DefaultEndpointsProtocol=https;AccountName=change;AccountKey=T8Yw3ZIfNu6D9vLtD+PR8d4AoMqD1LnfqiYHetU3Dh8F3E22P3ZOuvr/IerIyQp2sSzqpS2O5q0k9PQha2pF7w==;EndpointSuffix=core.windows.net');
    var rawdata = item;
    var matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var type = matches[1];
    var buffer = new Buffer(matches[2], 'base64');
    // let file = (item as string).match(/[\w_\-ñ ]+\..*/g);
    blobService.createBlockBlobFromText('credencial', uid() + '.jpg',
      buffer,
      { contentType: type }
      , function (error, result, response) {
        console.log(error);
        console.log(result);
        console.log(response);
        if (!error) {
          console.log('Cargado');
        } else {
          console.log('No cargado');
        }
      });
  }





}
