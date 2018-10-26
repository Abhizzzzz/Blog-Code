import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//router module used for setting up the application level route
import{RouterModule,Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
//Requires for using forms in angular
import {FormsModule} from '@angular/forms';


// import { HttpModule } from '@angular/http';
//Removes staticinjectorerror
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    //routeModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},//if the path is http://localhost:4200(By-Default) it will load home
      {path:'create',component:BlogCreateComponent},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogEditComponent}  
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
