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

const routes = [
  {path: "" , component: AppComponent } ,
  {path: "registration" , component: RegistrationComponent},
  {path: "authorization", component: AuthorizationComponent},
  {path: "home" , component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthorizationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService , FrontService],
  bootstrap: [AppComponent]
})
export class AppModule { }
