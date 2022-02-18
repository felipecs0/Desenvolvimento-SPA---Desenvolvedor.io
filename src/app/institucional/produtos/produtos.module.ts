import { ProdutosListComponent } from './produtosList/produtosList.component';
import { ProdutosComponent } from './produtos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);
import { ProdutosRoutingModule } from './produtos.routes';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoDetalheComponent,
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
  ],
  exports:[]
})
export class produtosModule { }
