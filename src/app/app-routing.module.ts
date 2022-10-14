import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConfigComponent } from './add-config/add-config.component';
import { ListAllConfigComponent } from './list-all-config/list-all-config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListAllConfigComponent,
  },
  {
    path: 'add',
    component: AddConfigComponent,
  },
  {
    path: 'edit/:id',
    component: AddConfigComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
