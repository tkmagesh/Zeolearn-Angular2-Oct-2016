import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MessageService} from './MessageService';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers : [MessageService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
