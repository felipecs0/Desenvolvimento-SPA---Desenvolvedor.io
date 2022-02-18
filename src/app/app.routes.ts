import { NgModule } from '@angular/core';
import { Erro404Component } from './navegacao/erro404/erro404.component';

import { HomeComponent } from './navegacao/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { FeaturesComponent } from './institucional/features/features.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'produtos', 
      loadChildren: () => import('./institucional/produtos/produtos.module').then(m=> m.produtosModule)
    },
    { path: 'cadastro', 
      loadChildren: () => import('./demos/demos.module').then(m=> m.DemosModule)
    },
    { path: 'sobre', 
      loadChildren: () => import('./institucional/sobre/sobre.module').then(m=> m.SobreModule)
    },
    { path: '**', component: Erro404Component},
];

@NgModule({
    imports: [ RouterModule.forRoot(rootRouterConfig)],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}