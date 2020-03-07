import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './service/backend.service';
import { FrontService } from './service/front.service';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomepageComponent } from './homepage/homepage.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserGuard } from './user-page.guard';

const routes = [
  {path: '' , component: HomepageComponent } ,
  {path: 'registration' , component: RegistrationComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'userpage' , component: UserPageComponent ,}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthorizationComponent,
    HomepageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService , FrontService, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
