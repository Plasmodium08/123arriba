import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrivacidadPage } from '../pages/privacidad/privacidad';
import { RegistroPage } from '../pages/registro/registro';
import { PrimeraPage } from '../pages/primera/primera';
import { SegundaPage } from '../pages/segunda/segunda';
import { TerceraPage } from '../pages/tercera/tercera';
import { CuartaPage } from '../pages/cuarta/cuarta';
import { NaranjaPage } from '../pages/naranja/naranja';
import { QuintaPage } from '../pages/quinta/quinta';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrivacidadPage,
    RegistroPage,
    PrimeraPage,
    SegundaPage,
    TerceraPage,
    CuartaPage,
    NaranjaPage,
    QuintaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrivacidadPage,
    RegistroPage,
    PrimeraPage,
    SegundaPage,
    TerceraPage,
    CuartaPage,
    NaranjaPage,
    QuintaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
