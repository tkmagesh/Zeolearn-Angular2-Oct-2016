import {NgModule} from '@angular/core';
import {MyAppComponent} from './app.component';
import {TimeComponent} from './time.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports : [BrowserModule],
    bootstrap : [MyAppComponent],
    declarations : [MyAppComponent, TimeComponent]
})
export class MyAppModule{

}