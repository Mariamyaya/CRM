import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  Ref: String;
  Description: string;
  Prix:number;
  Actions:String;
  
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Ref: '1A', Description: 'Produit1',Prix:200.0, Actions:''},
  { Ref:'1B', Description: 'Produit2',Prix:150.00,Actions:''},
  { Ref: '1C', Description: 'Produit3',Prix:300.00,Actions:''},
  { Ref: '1D', Description: 'Produit4',Prix:450.00, Actions:''},
  { Ref: '1F', Description: 'Produit5',Prix:100.00, Actions:''},
];
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
  displayedColumns: string[] = ['Ref', 'Description','Prix','Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
