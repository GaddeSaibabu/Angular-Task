import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';
import { ExplorePageComponent, SigninComponent, UnauthorizedComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full',
  },
  {
    path: 'explore',
    component: ExplorePageComponent,
  },
  {
    path: 'sign-in',
    component: SigninComponent,
  },
  {
    path:'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'albums',
        loadChildren: () =>
          import('./modules/album/album.module').then(
            (module) => module.AlbumModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
