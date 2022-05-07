import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { SghpipesPipe } from './pipes/sghpipes.pipe';

const routeArray =[
  {
    path: 'userList',
    component: UserComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    SghpipesPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routeArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
