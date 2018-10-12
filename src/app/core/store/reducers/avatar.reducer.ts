import {AvatarActions, GenericAction} from '../../models/action.model';

export interface AvatarState {
    url?: string;
    percentage: number;
    inProgress: boolean;
}

export const initialState: AvatarState = {
    percentage: 0,
    inProgress: false,
};

export function avatarReducer(state = initialState, action: GenericAction): AvatarState {

    switch (action.type) {

        case 'ROUTER_NAVIGATION': {
            return {
                ...state,
                url: action.payload.event.url === '/core/novo-aluno' ? '' : state.url
            };
        }

        case AvatarActions.UPLOAD: {
            return {
                ...state,
                percentage: 0,
                inProgress: true
            };
        }

        case AvatarActions.PROGRESS: {
            return {
                ...state,
                percentage: action.payload
            };
        }

        case AvatarActions.COMPLETE: {
            return {
                ...state,
                inProgress: false,
                url: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
