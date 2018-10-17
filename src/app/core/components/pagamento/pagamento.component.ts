import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {PagamentoActions, UIActions} from '../../models/action.model';

@Component({
    selector: 'app-pagamento',
    templateUrl: './pagamento.component.html',
    styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

    pagamentoForm = this.fb.group({
        id: null,
        referencia: [null, Validators.required],
        data: [null, Validators.required],
        valor: [null, Validators.required]
    });

    constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PagamentoComponent>) {
    }

    ngOnInit() {
    }

    inserir() {
        if (this.pagamentoForm.valid) {
            this.dialogRef.close({type: PagamentoActions.INSERIR, payload: this.pagamentoForm.value});
        }
    }

    cancelar() {
        this.dialogRef.close({type: UIActions.EMPTY});
    }
}
