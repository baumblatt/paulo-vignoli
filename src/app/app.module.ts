import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import localeBRExtra from '@angular/common/locales/extra/pt';
import localeBR from '@angular/common/locales/pt';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {RouterEffects} from './store/effects/router.effect';
import {globalReducer, metaReducers} from './store/reducers/global.reducer';
import {CustomSerializer} from './store/reducers/router.reducer';

registerLocaleData(localeBR, 'pt', localeBRExtra);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        EffectsModule.forRoot([RouterEffects]),
        StoreModule.forRoot(globalReducer, {metaReducers}),
        StoreRouterConnectingModule,
        StoreDevtoolsModule.instrument({name: 'Paulo Vignoli', logOnly: environment.production}),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [AuthGuard, {provide: RouterStateSerializer, useClass: CustomSerializer}, {provide: LOCALE_ID, useValue: 'pt_BR'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
