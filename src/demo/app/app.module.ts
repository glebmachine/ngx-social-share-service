import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialShareModule } from '@betadigitalproduction/ngx-social-share-service';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SocialShareModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
