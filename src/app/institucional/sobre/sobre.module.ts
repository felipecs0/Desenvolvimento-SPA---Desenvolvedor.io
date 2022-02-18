import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre.routes';

@NgModule({
  imports: [
    CommonModule,
    SobreRoutingModule
  ],
  declarations: [ SobreComponent ]
})
export class SobreModule { }
