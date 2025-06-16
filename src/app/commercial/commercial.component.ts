import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AjouterCommercialComponent } from '../ajouter-commercial/ajouter-commercial.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
export interface PeriodicElement {
  Id_poste: number;
  Nom: string;
  Tel:String;
  Actions:String;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Id_poste: 1, Nom: 'Client1',Tel:'0000.0000',  Actions:''},
  { Id_poste: 2, Nom: 'Client2', Tel: '0000.0000', Actions:''},
  { Id_poste: 3, Nom: 'Client3', Tel:'0000.0000', Actions:''},
  { Id_poste: 4, Nom: 'Client4', Tel: '0000.0000', Actions:''},
  { Id_poste: 5, Nom: 'Client5',Tel: '0000.0000',Actions:''},
  
];
@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  displayedColumns: string[] = ['Id_poste', 'Nom','Tel','Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor(public dialog: MatDialog) { }
 
  openDialog() {
    this.dialog.open(AjouterCommercialComponent);
  }
  ngOnInit(): void {
  }

}

