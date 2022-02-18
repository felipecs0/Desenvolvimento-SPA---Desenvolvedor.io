import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  protected UrlService:string = 'http://localhost:3000/'
  protected EndPoint:string = 'produtos/'
  
  obterProdutos():Observable<Produto[]> {
   return this.http.get<Produto[]>(this.UrlService + this.EndPoint)
  }
  obterProdutosPorID(id:number):Observable<Produto>{
    return this.http.get<Produto>(this.UrlService + this.EndPoint + id)
  }

  constructor(private http:HttpClient) { }


}
