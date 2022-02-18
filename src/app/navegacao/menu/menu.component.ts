import { Nav } from './nav';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  routerNav: Nav[]=[
    {
      routerName: "Produtos",
      routerLink: "/produtos",
      routerActive: "active",
      exactRouterActive: true,
    },
    {
      routerName: "Sobre",
      routerLink: "/sobre",
      routerActive: "active",
      exactRouterActive: true,
    },
    {
      routerName: "Contato",
      routerLink: "/contato",
      routerActive: "active",
      exactRouterActive: true,
    },
    {
      routerName: "Features",
      routerLink: "/features",
      routerActive: "active",
      exactRouterActive: true,
    },
    {
      routerName: "Cadastro",
      routerLink: "/cadastro",
      routerActive: "active",
      exactRouterActive: true,
    },
  ]

}
