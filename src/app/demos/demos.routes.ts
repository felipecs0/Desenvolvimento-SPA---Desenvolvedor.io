import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './reactiveForms/cadastro/cadastro.component';

const demosRouterConfig: Routes = [
    { path:'', component: CadastroComponent }


];

@NgModule({
    imports: [ RouterModule.forChild(demosRouterConfig) ],
    exports: [ RouterModule ]
})
export class demosRoutingModule{}