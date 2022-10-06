import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { AddOrganizationComponent } from './components/add-organization/add-organization.component';
import { SearchOrganizationPipe } from './pipes/search-organization/search-organization.pipe';
import { DevideByThreePipe } from './pipes/devide-by-three/devide-by-three.pipe';
import { NextThreePipe } from './pipes/next-three/next-three.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CardComponent,
    AddOrganizationComponent,
    SearchOrganizationPipe,
    DevideByThreePipe,
    NextThreePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
