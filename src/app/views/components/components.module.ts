import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    FormsModule,
    CommonModule,
    HttpModule,
    QRCodeModule
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent
  ]
})
export class ComponentsModule { }
