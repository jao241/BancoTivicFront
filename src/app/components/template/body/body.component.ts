import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';


interface IUser{
  name:string;
  password:string;
  idAccount:string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  user:any;
  account:any;

  constructor(private service: AppService) { 
  }

  ngOnInit(): void {
    this.user = {};
    this.account = {};

    this.service.buscarUsuario().subscribe(resposta => this.user = resposta as IUser);
    this.service.buscarConta(this.user.idAccount).subscribe(resposta => this.account = resposta);

  }

  depositar(depositar:number){
    this.service.depositar(depositar);
  }

  sacar(sacar:number){
    this.service.sacar(sacar);
  }

}
