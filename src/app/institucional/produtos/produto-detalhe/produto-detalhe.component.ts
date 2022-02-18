import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private router: Router,
              private produtosService:ProdutosService) { }

  public produto?: Produto = {} as Produto

  ngOnInit(): void {
  this.produtosService.obterProdutosPorID(Number(this.activatedRoute.snapshot.paramMap.get('id')))
  .subscribe(
    produto=>{this.produto=produto},
    error => console.log(error)
  );  
  }

  voltar(){
    this.router.navigate(['/produtos'])
  }

}
