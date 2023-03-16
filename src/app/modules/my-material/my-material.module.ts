import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';



@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule,
    CommonModule,
    CdkTableModule,
    MatButtonModule,
    MatListModule
  ]
})
export class MyMaterialModule { }
