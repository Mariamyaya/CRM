import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core/core.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommercialComponent } from '../commercial/commercial.component';
import { ProduitComponent } from '../produit/produit.component';
import { VenteComponent } from '../vente/vente.component';
import { AjouterCommercialComponent } from '../ajouter-commercial/ajouter-commercial.component';
import { AjouterClientComponent } from '../ajouter-client/ajouter-client.component';
@NgModule ({
  declarations: [
   CoreComponent,
   DashboardComponent,
   CommercialComponent,
   ProduitComponent,
   VenteComponent,
   AjouterCommercialComponent,
   AjouterClientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CoreRoutingModule,
    MaterialModule,
    HttpClientModule,
    
  ]
 
})
export class CoreModule { }
