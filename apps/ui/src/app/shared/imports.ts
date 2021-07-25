import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AbstractNgModelComponent } from './abstracts';
import {
  AccordionComponent,
  AutoCompleteComponent,
  BasicInputComponent,
  ColorSchemaComponent,
  DialogAvatarEditorComponent,
  ErrorComponent,
  ExpansionPanelComponent,
  FooterComponent,
  FreeTextInputComponent,
  InputFieldComponent,
  LanguageExchangeComponent,
  NavLinkComponent,
  SectionHeaderComponent,
} from './components';
import { DisableInputDirective, FormControlErrorDirective } from './directives';
import { MemoizePipe, PhonePipe, SentenceCasePipe } from './pipes';
import { GraphqlService, LocalStorageService, StateService } from './services';

export const MATERIAL_MODULES = [
  // A11yModule,
  MatAutocompleteModule,
  FlexLayoutModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatRippleModule,
  MatGridListModule,
  MatDialogModule,
];

export const COMPONENTS = [
  AbstractNgModelComponent,
  ErrorComponent,
  ColorSchemaComponent,
  NavLinkComponent,
  LanguageExchangeComponent,
  FooterComponent,
  InputFieldComponent,
  BasicInputComponent,
  AccordionComponent,
  AutoCompleteComponent,
  SectionHeaderComponent,
  FreeTextInputComponent,
  ExpansionPanelComponent,
  DialogAvatarEditorComponent,
];

export const PIPES = [PhonePipe, MemoizePipe, SentenceCasePipe];

export const DIRECTIVES = [FormControlErrorDirective, DisableInputDirective];

export const SERVICES = [GraphqlService, LocalStorageService, StateService];
