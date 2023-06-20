import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { firstResolver } from './resolvers/first.resolver';
import { firstChildGuard } from './guards/first-child.guard';
import { deactivateGuard } from './guards/deactivate.guard';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    resolve: { first: firstResolver },
    children: [
      {
        path: 'second',
        component: SecondComponent,
        canDeactivate: [deactivateGuard],
      },
      {
        path: 'second-second',
        component: SecondComponent,
      }
    ],

  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
