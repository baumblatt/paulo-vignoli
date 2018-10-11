import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AlunosAction, AvatarActions} from '../../models/action.model';
import {AvatarState} from '../../store/reducers/avatar.reducer';
import {CoreState} from '../../store/reducers/global.reducer';
import {getAvatarState} from '../../store/selectors/avatar.selectors';

@Component({
    selector: 'app-novo-aluno',
    templateUrl: './novo-aluno.component.html',
    styleUrls: ['./novo-aluno.component.scss']
})
export class NovoAlunoComponent implements OnInit {

    avatar$: Observable<AvatarState>;

    alunoForm = this.fb.group({
        avatar: null,
        nome: [null, Validators.required],
        responsavel: null,
        telefone: null,
        email: [null, Validators.email],
        nascimento: null
    });

    constructor(private store: Store<CoreState>, private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.avatar$ = this.store.pipe(select(getAvatarState));
    }

    inserir() {
        this.store.dispatch({type: AlunosAction.INSERIR, payload: this.alunoForm.getRawValue()});
    }

    avatar(event) {
        this.store.dispatch({type: AvatarActions.UPLOAD, payload: event.target.files[0]});
    }
}
