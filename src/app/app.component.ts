import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { StorageProvider } from '../providers/storage/storage';
import { CamaraPage } from '../pages/camara/camara';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  public UsuarioProv: UsuarioProvider,
  public StorageProv: StorageProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      {title: 'Cerrar Sesión', component: LoginPage},
      {title: 'Camara', component: CamaraPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.UsuarioProv.crearToken();
      this.checkStorage();
    });
  }

  public checkStorage(){
    this.StorageProv.waitForStorage()
    .then( (data) => {
      if( data == null){
        this.rootPage = LoginPage; 
      }
    else{
      this.rootPage = HomePage;
    }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component == LoginPage){
      this.StorageProv.deleteStorage();
    }
    this.nav.setRoot(page.component);
  }
}
