import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{ FormsModule} from '@angular/forms'
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { AzureProvider } from '../providers/azure/azure';
import { HttpClientModule } from '@angular/common/http';
import { StorageProvider } from '../providers/storage/storage';
import { RegistrarPage } from '../pages/registrar/registrar';
import { TokenProvider } from '../providers/token/token';
import { InicioPage } from '../pages/inicio/inicio';
import { CamaraPage } from '../pages/camara/camara';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistrarPage,
    InicioPage,
    CamaraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistrarPage,
    InicioPage,
    CamaraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    AzureProvider,
    StorageProvider,
    TokenProvider,
    Camera
  ]
})
export class AppModule {}
