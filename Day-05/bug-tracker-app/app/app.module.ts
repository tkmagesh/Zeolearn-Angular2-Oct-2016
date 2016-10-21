import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MyAppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';

import {BugTracker} from './bug-tracker/bug-tracker.component';
import {BugOperations} from './bug-tracker/services/bugOperations';
import {TrimText} from './bug-tracker/pipes/trimText';
import {ClosedCount} from './bug-tracker/pipes/closedCount';
import {Filter} from './bug-tracker/pipes/filter';
import {Sort} from './bug-tracker/pipes/sort';

@NgModule({
    imports : [BrowserModule, FormsModule],
    bootstrap : [MyAppComponent],
    declarations : [MyAppComponent, BugTracker, TrimText, ClosedCount, Filter, Sort],
    providers  : [BugOperations]
})
export class MyAppModule{

}