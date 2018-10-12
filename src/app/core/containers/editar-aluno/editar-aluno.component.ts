import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AlunosAction, AvatarActions} from '../../models/action.model';
import {AvatarState} from '../../store/reducers/avatar.reducer';
import {CoreState} from '../../store/reducers/global.reducer';
import {getAvatarState} from '../../store/selectors/avatar.selectors';

@Component({
    selector: 'app-editar-aluno',
    templateUrl: './editar-aluno.component.html',
    styleUrls: ['./editar-aluno.component.scss']
})
export class EditarAlunoComponent implements OnInit {

    @ViewChild('avatarInput')
    avatarInput: ElementRef;

    avatarState$: Observable<AvatarState>;

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
        this.avatarState$ = this.store.pipe(select(getAvatarState));
    }

    inserir() {
        this.store.dispatch({type: AlunosAction.INSERIR, payload: this.alunoForm.getRawValue()});
    }

    avatar() {
        this.avatarInput.nativeElement.click();
    }

    avatarChange(event) {
        this.store.dispatch({type: AvatarActions.UPLOAD, payload: event.target.files[0]});
    }
}
