import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
