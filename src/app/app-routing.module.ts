import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PublicationsComponent } from './publications/publications.component';
import { RegisterComponent } from './register/register.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "events", component: EventsComponent},
  {path: "publications", component: PublicationsComponent},
  {path: "workspace", component: WorkspaceComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "**", component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
