import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
    view?: string;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {

    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const {url} = routerState;
        const {queryParams} = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const {params, data} = state;
        let view;
        if (data && data.view) {
            view = data.view;
        } else {
            const slashIndex = url.lastIndexOf('/');
            view = url.substring(slashIndex !== -1 ? slashIndex + 1 : 0, url.length)
                .replace('-', ' ')
                .toLowerCase();

            view = view[0].toUpperCase() + view.slice(1);
        }
        return {url, queryParams, params, view};
    }
}
