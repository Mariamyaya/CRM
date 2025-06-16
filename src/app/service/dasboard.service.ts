import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface client {
  Id:number;
  Nom: string;
  Prenom: string;
  Adress: string;
  Tel: number;
}

const data_client: client[] =[

  {Id: 1,Nom: 'Hydrogen',Prenom:'ze',Adress: 'H',Tel :12345},
]

@Injectable({
  providedIn: 'root'
})
export class DasboardService {
 
    displayedColumns: string[] = ['Id','Nom', 'Prenom', 'Adress', 'Tel'];
    dataSource = new ExampleDataSource();
  

  constructor() { }
}
export class ExampleDataSource extends DataSource <client> {
  
  data = new BehaviorSubject<client[]>(data_client);

  
  connect(): Observable<client[]> {
    return this.data;
  }

  disconnect() {}
}
