import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {TurmasAction, UIActions} from '../../models/action.model';

@Component({
    selector: 'app-turma',
    templateUrl: './turma.component.html',
    styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

    turmaForm = this.fb.group({
        id: null,
        dia: [null, Validators.required],
        horario: [null, Validators.required],
        alunos: [[]],
    });

    constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<TurmaComponent>) {
    }

    ngOnInit() {
    }

    inserir() {
        if (this.turmaForm.valid) {
            this.dialogRef.close({type: TurmasAction.INSERIR, payload: this.turmaForm.value});
        }
    }

    cancelar() {
        this.dialogRef.close({type: UIActions.EMPTY});
    }
}
