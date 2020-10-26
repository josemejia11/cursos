import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonasComponent } from './components/donas/donas.component';
import { RadarComponent } from './components/radar/radar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarrasComponent,
    DonasComponent,
    RadarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
