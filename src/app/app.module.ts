import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListComponent } from './list/list.component';
import { RememberButtonComponent } from './remember-button/remember-button.component';
import { CounterComponent } from './counter/counter.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ListComponent,
    RememberButtonComponent,
    CounterComponent,
    ObservableComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
