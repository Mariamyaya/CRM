import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Id: number;
  Nom: string;
  Prenom:String,
  Adrsse: string;
  Tel:String;
  Actions:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Id: 1, Nom: 'Client1',Prenom:'Client1',Adrsse: 'casablanca',Tel:'0000.0000',Actions:''},
  { Id: 2, Nom: 'Client2', Prenom:'Client2', Adrsse: 'Rabat',Tel: '0000.0000',Actions:''},
  { Id: 3, Nom: 'Client3', Prenom:'Client3', Adrsse: 'Fes',Tel:'0000.0000', Actions:''},
  { Id: 4, Nom: 'Client4', Prenom:'Client4', Adrsse: 'Rabat',Tel: '0000.0000', Actions:''},
  { Id: 5, Nom: 'Client5', Prenom:'Client5', Adrsse: 'agadir',Tel: '0000.0000', Actions:''},
  
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nom','Prenom', 'Adrsse','Tel','Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  



  constructor() {   }

  ngOnInit(): void {
  }

}

