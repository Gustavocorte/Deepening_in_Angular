import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FistComponentComponent } from './components/fist-component/fist-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FistComponentComponent,
    ParentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }