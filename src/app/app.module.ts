import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage"

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { ArtistPage } from '../pages/artist/artist';
import { AlbumPage } from '../pages/album/album';
import { ProfilePage } from '../pages/profile/profile';
import { HttpModule } from '@angular/http';
import { F2pMainMenuModule } from '../components/f2p-main-footer/f2p-main-footer.module';
import { StorageProvider} from '../providers/storage/storage.provider';
import { EditFormModule } from '../components/edit-form/edit-form.module';
import { EditFormComponent } from '../components/edit-form/edit-form';
import { ArtistListModule } from '../components/artist-list/artist-list.module';
import { ArtistListComponent } from '../components/artist-list/artist-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SearchPage,
    ArtistPage,
    AlbumPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    F2pMainMenuModule,
    ArtistListModule,
    EditFormModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SearchPage,
    ArtistPage,
    AlbumPage,
    ProfilePage,
    EditFormComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    StorageProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
