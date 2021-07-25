import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResumeCommonResolver } from './modules/resume/resolvers';

const routes: Routes = [
  {
    path: 'resume',
    loadChildren: () => import('./modules/resume/resume.module').then((m) => m.ResumeModule),
    resolve: { resolve: ResumeCommonResolver },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
  providers: [ResumeCommonResolver],
})
export class AppRoutingModule {}
