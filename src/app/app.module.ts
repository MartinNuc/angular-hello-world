import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListComponent } from './list/list.component';
import { RememberButtonComponent } from './remember-button/remember-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ListComponent,
    RememberButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
