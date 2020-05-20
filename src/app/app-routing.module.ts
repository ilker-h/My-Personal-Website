import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { AboutComponent } from './about/about.component';
// import { SkillsComponent } from './skills/skills.component';
// import { ExperienceComponent } from './experience/experience.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // { path: '', component: AboutComponent, pathMatch: 'full'},
  // { path: '', component: SkillsComponent},
  // { path: '', component: ExperienceComponent},
  // { path: '', component: ProjectsComponent},
  // { path: '', component: ContactComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
