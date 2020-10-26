import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarrasComponent } from './components/barras/barras.component';
import { DonasComponent } from './components/donas/donas.component';
import { LineaComponent } from './components/linea/linea.component';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  {path:'radar', component: RadarComponent},
  {path:'barras', component: BarrasComponent},
  {path:'linea', component: LineaComponent},
  {path:'donas', component: DonasComponent},
  {path:'**', pathMatch:'full', redirectTo:'linea'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
