"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var platform_browser_1 = require('@angular/platform-browser');
var bug_tracker_component_1 = require('./bug-tracker/bug-tracker.component');
var bugOperations_1 = require('./bug-tracker/services/bugOperations');
var trimText_1 = require('./bug-tracker/pipes/trimText');
var closedCount_1 = require('./bug-tracker/pipes/closedCount');
var filter_1 = require('./bug-tracker/pipes/filter');
var sort_1 = require('./bug-tracker/pipes/sort');
var MyAppModule = (function () {
    function MyAppModule() {
    }
    MyAppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            bootstrap: [app_component_1.MyAppComponent],
            declarations: [app_component_1.MyAppComponent, bug_tracker_component_1.BugTracker, trimText_1.TrimText, closedCount_1.ClosedCount, filter_1.Filter, sort_1.Sort],
            providers: [bugOperations_1.BugOperations]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppModule);
    return MyAppModule;
}());
exports.MyAppModule = MyAppModule;
//# sourceMappingURL=app.module.js.map