import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListPageComponent } from './projects-list-page/projects-list-page.component';
import { ProjectPagesRoutingModule } from './project-pages-routing.module';
import { ProjectStateModule } from '@app/features/project/state';


@NgModule({
  declarations: [
    ProjectsListPageComponent
  ],
  imports: [
    CommonModule,
    ProjectPagesRoutingModule,
    ProjectStateModule
  ]
})
export class ProjectPagesModule { }
