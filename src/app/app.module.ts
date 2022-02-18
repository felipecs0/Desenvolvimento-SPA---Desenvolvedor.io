import { ContatoComponent } from './institucional/contato/contato.component';
import { FeaturesComponent } from './institucional/features/features.component';
import { AppRoutingModule } from './app.routes';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    NavegacaoModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
