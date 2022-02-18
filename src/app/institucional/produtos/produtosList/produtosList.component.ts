import { Produto } from './../produto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtosList',
  templateUrl: './produtosList.component.html',
  styleUrls: ['./produtosList.component.css']
})
export class ProdutosListComponent implements OnInit {

  @Input()
  produto!:Produto;

  constructor() { }

  ngOnInit() {
  }

}
