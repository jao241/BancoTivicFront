import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService{

    private userUrl = 'http://localhost:3333/User/91fc5003-42c5-4d65-9ab6-257556f04efc';
    private accountUrl = 'http://localhost:3333/Account/0a520600-3f1d-41d0-95b9-3ecbf23fc08c';

    constructor(private http: HttpClient){

    }

    buscarUsuario(){
        return this.http.get(this.userUrl);
    }

    buscarConta(idAccount:any){
        return this.http.get(`${this.accountUrl}/${idAccount}`);
    }

    depositar(depositar:number){
        this.http.patch(`${this.accountUrl}`, depositar);
    }

    sacar(sacar:number){
        this.http.patch(`${this.accountUrl}`, sacar);
    }
}