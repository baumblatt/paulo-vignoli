// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    login: 'http://localhost:4200/core/login',
    firebase: {
        apiKey: 'AIzaSyDZynm_kddGYcufKp-NE9P8W-UkMHwioGM',
        authDomain: 'paulo-vignoli.firebaseapp.com',
        databaseURL: 'https://paulo-vignoli.firebaseio.com',
        projectId: 'paulo-vignoli',
        storageBucket: 'paulo-vignoli.appspot.com',
        messagingSenderId: '73307764164',
    }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
