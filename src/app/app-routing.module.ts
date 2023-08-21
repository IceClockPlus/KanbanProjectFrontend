import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '@app/layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'board',
        loadComponent: () => 
        import('./views/board/board.component').then(
          (c) => c.BoardComponent
        ),
        title: 'Board'
      }, {
        path: 'projects',
        loadChildren:() => import('./pages/project-pages/project-pages.module').then((m) => m.ProjectPagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
