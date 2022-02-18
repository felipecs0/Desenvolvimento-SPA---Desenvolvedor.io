import { Erro404Component } from './erro404/erro404.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    Erro404Component,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    FooterComponent,
    Erro404Component,
  ]
})
export class NavegacaoModule { }
