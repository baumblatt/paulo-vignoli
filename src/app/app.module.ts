import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {globalReducer, metaReducers} from './store/reducers/global.reducer';
import {CustomSerializer} from './store/reducers/router.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        AngularFirestoreModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(globalReducer, {metaReducers}),
        StoreRouterConnectingModule,
        StoreDevtoolsModule.instrument({name: 'Paulo Vignoli', logOnly: environment.production}),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
