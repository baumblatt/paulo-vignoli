import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatOptionSelectionChange} from '@angular/material';
import {Subscription} from 'rxjs';
import {AlunosAction, GenericAction, TurmasAction} from '../../models/action.model';
import {Aluno} from '../../models/aluno.model';
import {Turma} from '../../models/turma.model';

@Component({
    selector: 'app-turma-card',
    templateUrl: './turma-card.component.html',
    styleUrls: ['./turma-card.component.scss']
})
export class TurmaCardComponent implements OnInit, OnDestroy {

    @Input()
    turma: Turma;

    @Input()
    alunos: Aluno[];

    @Output()
    actionEmitter: EventEmitter<GenericAction> = new EventEmitter<GenericAction>();

    alunoCtrl: FormControl = new FormControl();

    selecionado: Aluno;

    subscriptions: Subscription[] = [];

    ngOnInit(): void {
        this.subscriptions.push(this.alunoCtrl.valueChanges.subscribe(
            value => {
                this.actionEmitter.emit({type: AlunosAction.FILTRAR, payload: typeof value === 'string' ? value : ''});

                if (typeof value === 'string') {
                    this.selecionado = undefined;
                }
            }
        ));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    displayFn(user?: Aluno): string | undefined {
        return user ? user.nome : undefined;
    }

    adicionar() {
        if (this.selecionado) {
            this.actionEmitter.emit({
                type: TurmasAction.ADICIONAR, payload: {
                    turma: this.turma.id, aluno: this.selecionado.id
                }
            });
        }
    }


    selecionar($event: MatOptionSelectionChange) {
        this.selecionado = $event.source.value;
    }

}
