import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import * as COMPONENTS from './components';
import * as PARTIALS from './components/partials';
import * as TEMPLATES from './components/templates';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
  declarations: [
    COMPONENTS.EditResumeComponent,
    COMPONENTS.ListResumeComponent,
    COMPONENTS.LiveResumeComponent,
    PARTIALS.CoursesComponent,
    PARTIALS.CustomSectionsComponent,
    PARTIALS.EducationsComponent,
    PARTIALS.EmploymentHistoryComponent,
    PARTIALS.HobbiesComponent,
    PARTIALS.LanguagesComponent,
    PARTIALS.PersonalDetailsComponent,
    PARTIALS.ProfessionalSummaryComponent,
    PARTIALS.ReferencesComponent,
    PARTIALS.SkillsComponent,
    PARTIALS.SocialLinksComponent,
    TEMPLATES.IstanbulTemplateComponent,
    TEMPLATES.AnkaraTemplateComponent,
  ],
  imports: [CommonModule, ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
