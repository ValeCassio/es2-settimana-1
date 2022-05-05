import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostattiviComponent } from './components/postattivi/postattivi.component';
import { PostinattiviComponent } from './components/postinattivi/postinattivi.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes : Route[]= [
    {
        path: '',
        component: HomeComponent

    },

    {
        path: 'post-attivi',
        component: PostattiviComponent

    },

    {
        path: 'post-inattivi',
        component: PostinattiviComponent

    }


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostattiviComponent,
    PostinattiviComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
