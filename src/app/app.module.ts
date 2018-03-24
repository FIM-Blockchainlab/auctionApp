import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Input } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material';
import {  MatButtonModule  } from '@angular/material/button';
import { AppRoutingModule } from './/app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule, MatProgressBar} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';

import { Web3ConnectorService  } from './web3-connector.service';
import { ContractFunctionsService  } from './contract-functions.service';
import { Web3FunctionsService  } from './web3-functions.service';
import { HomeComponent } from './home/home.component';

import { MatSelectModule } from '@angular/material/select';
import { CreateComponent, CreateDialog } from './create/create.component';

import {MatDialogModule} from '@angular/material/dialog';

import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CreateDialog
  ],
  entryComponents:[
    CreateDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    HttpClientModule,
    MatSelectModule,
    QRCodeModule,
    MatDialogModule
  ],
  providers: [Web3ConnectorService, ContractFunctionsService, Web3FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
