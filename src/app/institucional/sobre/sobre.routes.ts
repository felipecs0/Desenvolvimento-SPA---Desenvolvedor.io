import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre.component';



const SobreRouterConfig: Routes = [
    { path:'', component: SobreComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(SobreRouterConfig)],
    exports: [ RouterModule ]
})
export class SobreRoutingModule{}