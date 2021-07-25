import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { COMPONENTS, DIRECTIVES, MATERIAL_MODULES, PIPES, SERVICES } from './imports';

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, TranslateModule, ...MATERIAL_MODULES],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ...MATERIAL_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  providers: [
    ...SERVICES,
    // { provide: ErrorStateMatcher, useClass: GeneralErrorStateMatcher },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class SharedModule {}
