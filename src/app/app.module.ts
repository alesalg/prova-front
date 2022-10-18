import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from './shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options:
  | Partial<null | IConfig>
  | (() => Partial<null | IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
