import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AboutComponent } from './home/about/about.component';
import { SlideComponent } from './home/slide/slide.component';
import { MemberComponent } from './home/member/member.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicationsComponent } from './publications/publications.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EventsComponent,
    WorkspaceComponent,
    AboutComponent,
    SlideComponent,
    MemberComponent,
    PublicationsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
