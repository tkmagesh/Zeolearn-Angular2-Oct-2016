import {NgModule} from '@angular/core';
import {MyAppComponent} from './app.component';
import {TimeComponent} from './time/time.component';
import {BrowserModule} from '@angular/platform-browser';
import {GreeterComponent} from './greeter/greeter.component';
import {SalaryCalculatorComponent} from './salaryCalculator/salaryCalculator.component';

@NgModule({
    imports : [BrowserModule],
    bootstrap : [MyAppComponent],
    declarations : [MyAppComponent, TimeComponent, GreeterComponent, SalaryCalculatorComponent]
})
export class MyAppModule{

}