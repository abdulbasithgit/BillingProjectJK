import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Main Screen
import { AddCategoryComponent } from './billing/main-screen/add-category/add-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'billing/add-category', pathMatch: 'full' },
  { path: 'home', component: AddCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
