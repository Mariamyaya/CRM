import { NgModule } from '@angular/core';
import { CoreComponent} from './core/core.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommercialComponent } from '../commercial/commercial.component';
import { ProduitComponent } from '../produit/produit.component';
import { VenteComponent } from '../vente/vente.component';
import { AjouterCommercialComponent } from '../ajouter-commercial/ajouter-commercial.component';
import { AjouterClientComponent } from '../ajouter-client/ajouter-client.component';
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '' ,
    component:CoreComponent,
    children: [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent },
        { path: 'commercial', component: CommercialComponent },
        { path: 'ajouter-commercial', component: AjouterCommercialComponent },
        { path: 'ajouter-client', component: AjouterClientComponent },
        { path: 'vente', component: VenteComponent },
        { path: 'produit', component:ProduitComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
