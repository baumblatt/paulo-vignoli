import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.scss']
})
export class NovoAlunoComponent {
  alunoForm = this.fb.group({
    nome: [null, Validators.required],
    responsavel: null
  });

  constructor(private fb: FormBuilder) {
  }
}
