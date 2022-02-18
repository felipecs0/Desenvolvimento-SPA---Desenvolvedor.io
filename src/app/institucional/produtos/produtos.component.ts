import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService:ProdutosService) { }

  public produtos!:Produto[]

  ngOnInit(): void {
    this.produtosService.obterProdutos()
    .subscribe(
      produtos=>{this.produtos=produtos},
      error => console.log(error)
    );
  }

}
