import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.count
  }
  public contadorClique: number = 0;

  public nome: string = '' as string;

  count(){
    
    this.contadorClique++;
  }
  zerarcount(){
    
    this.contadorClique = 0;
  }  
}
