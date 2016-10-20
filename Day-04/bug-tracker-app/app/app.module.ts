import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MyAppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports : [BrowserModule, FormsModule],
    bootstrap : [MyAppComponent],
    declarations : [MyAppComponent]
})
export class MyAppModule{

}