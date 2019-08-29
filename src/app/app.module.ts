import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { DistritoComponent } from './distrito/distrito.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    DepartamentoComponent,
    ProvinciaComponent,
    DistritoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
