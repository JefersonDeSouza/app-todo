// Modules Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules App
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';

// App Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
