import { Usuario } from './models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;
  usuario!: Usuario;
  formResulte: string = '';

  constructor( private fb:FormBuilder ) { }

  public MASKS = MASKS

  ngOnInit(): void {

    let senha = new FormControl('',[Validators.required, CustomValidators.rangeLength([6,15])]);
    let confirmarSenha = new FormControl ('', [Validators.required, CustomValidators.rangeLength([5,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, <any>NgBrazilValidators.cpf]],
      senha: senha,
      confirmarSenha: confirmarSenha,
    })
  }

  adicionarUsuario(){
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResulte = JSON.stringify(this.cadastroForm.value);
    }
    else{

    };
  }

}
