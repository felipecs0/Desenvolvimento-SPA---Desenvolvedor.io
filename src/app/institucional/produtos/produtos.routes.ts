import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './produtos.component';


const produtosRouterConfig: Routes = [
    { path:'', component: ProdutosComponent },
    { path:'detalhes/:id', component: ProdutoDetalheComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(produtosRouterConfig)],
    exports: [ RouterModule ]
})
export class ProdutosRoutingModule{}