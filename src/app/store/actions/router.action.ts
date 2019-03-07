import {NavigationExtras} from '@angular/router';
import {Action} from '@ngrx/store';

export const NAVIGATION = '[Router] Navigation';

export class Navigation implements Action {
    readonly type = NAVIGATION;

    constructor(public payload: { path: any[]; query?: object; extras?: NavigationExtras; }) {
    }
}

export type RouterActions = Navigation;
