import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';
import {AlunosAction, AvatarActions, PagamentoActions} from '../../models/action.model';
import {AvatarState} from '../../store/reducers/avatar.reducer';
import {CoreState} from '../../store/reducers/global.reducer';
import {getAluno} from '../../store/selectors/alunos.selectors';
import {getAvatarState} from '../../store/selectors/avatar.selectors';

@Component({
    selector: 'app-aluno',
    templateUrl: './aluno.component.html',
    styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

    @ViewChild('avatarInput')
    avatarInput: ElementRef;

    avatarState$: Observable<AvatarState>;

    alunoForm: FormGroup = this.fb.group({
        id: null,
        avatar: null,
        nome: [null, Validators.required],
        responsavel: null,
        telefone: null,
        email: [null, Validators.email],
        nascimento: null,
        pagamento: [null, Validators.required],
    });

    constructor(private store: Store<CoreState>, private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.store.pipe(
            select(getAluno),
            filter(aluno => !!aluno),
            take(1),
        ).subscribe(aluno =>
            this.alunoForm.setValue(aluno)
        );

        this.avatarState$ = this.store.pipe(
            select(getAvatarState),
            tap(state => {
                    if (state.url) {
                        this.alunoForm.get('avatar').setValue(state.url);
                    }
                }
            ),
        );
    }

    inserir() {
        if (this.alunoForm.valid) {
            this.store.dispatch({type: AlunosAction.SALVAR, payload: this.alunoForm.getRawValue()});
        }
    }

    avatar() {
        this.avatarInput.nativeElement.click();
    }

    avatarChange(event) {
        this.store.dispatch({type: AvatarActions.UPLOAD, payload: event.target.files[0]});
    }

    novoPagamento() {
        this.store.dispatch({type: PagamentoActions.NOVO});
    }
}
