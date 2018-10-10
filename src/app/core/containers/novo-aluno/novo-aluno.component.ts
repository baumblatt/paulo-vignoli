import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AlunosAction} from '../../models/action.model';
import {CoreState} from '../../store/reducers/global.reducer';

@Component({
    selector: 'app-novo-aluno',
    templateUrl: './novo-aluno.component.html',
    styleUrls: ['./novo-aluno.component.scss']
})
export class NovoAlunoComponent {
    alunoForm = this.fb.group({
        nome: [null, Validators.required],
        responsavel: null,
        telefone: null,
        email: [null, Validators.email],
        nascimento: null
    });

    constructor(private store: Store<CoreState>, private fb: FormBuilder) {
    }

    inserir() {
        this.store.dispatch({type: AlunosAction.INSERIR, payload: this.alunoForm.getRawValue()});
    }
}
