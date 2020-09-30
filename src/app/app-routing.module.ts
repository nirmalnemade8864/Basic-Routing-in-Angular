import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component'
import { InfoComponent } from './info/info.component'
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'





const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },



  {
    path: "demo",
    component: DemoComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path: "user",
    component: UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
