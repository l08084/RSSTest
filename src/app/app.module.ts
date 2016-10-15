import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { FeedComponent } from './feed.component';
import { FeedService } from './feed.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FeedComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
