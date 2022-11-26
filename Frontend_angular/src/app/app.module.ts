import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentConatinerComponent } from './components/content-conatiner/content-conatiner.component';
import { AboutElzaComponent } from './components/about-elza/about-elza.component';
import { MontagesService } from './services/montages.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { VideoContentViewComponent } from './components/video-content-view/video-content-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentConatinerComponent,
    AboutElzaComponent,
    WelcomePageComponent,
    VideoContentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [MontagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
