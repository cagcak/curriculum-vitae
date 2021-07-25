import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditResumeComponent, ListResumeComponent, LiveResumeComponent } from './components';
import { ResumeEditResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: ListResumeComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        component: LiveResumeComponent,
      },
      {
        path: 'edit',
        component: EditResumeComponent,
        resolve: { resolve: ResumeEditResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ResumeEditResolver],
})
export class ResumeRoutingModule {}
