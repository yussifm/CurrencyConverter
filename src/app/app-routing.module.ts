import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ConvertPageComponent } from './convert-page/convert-page.component';


const routes: Routes = [
  {
    path: '',
    component: ConvertPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent

  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
