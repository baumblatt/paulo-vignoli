import {GenericAction} from '../../models/action.model';
import {Frequencia} from '../../models/frequencia.model';

export interface FrequenciaState {
    frequencias: Frequencia[];
}

export const initialState: FrequenciaState = {
    frequencias: [],
};

export function frequenciaReducer(state = initialState, action: GenericAction): FrequenciaState {

    switch (action.type) {


        default: {
            return state;
        }
    }
}
