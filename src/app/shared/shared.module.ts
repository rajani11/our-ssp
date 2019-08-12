import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './material.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AppMaterialModule,
        ReactiveFormsModule,
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    providers: [
    ],

})
export class SharedModule {

}
