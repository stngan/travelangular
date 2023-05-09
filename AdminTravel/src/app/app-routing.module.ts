import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: 'Main',
    component: MainAdminComponent,
  },
  {
    path: 'DPost',
    component: DetailPostComponent,
  },
  {
    path: 'UPost/:id',
    component: UpdatePostComponent,
  },
  {
    path: 'CView',
    component: ClientViewComponent,
  },
  {
    path: 'User',
    component: AccountComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
 MainAdminComponent, DetailPostComponent, UpdatePostComponent,AccountComponent
];
