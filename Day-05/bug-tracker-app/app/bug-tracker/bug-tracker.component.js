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
var bugOperations_1 = require('./services/bugOperations');
var BugTracker = (function () {
    //sortOrder:string = '';
    function BugTracker(bugOperations) {
        this.bugOperations = bugOperations;
        this.bugs = [
            { name: 'User action not recognized', isClosed: false },
            { name: 'Server communication failure', isClosed: false },
            { name: 'Application not responsive', isClosed: true },
            { name: 'Unable to add a new bug', isClosed: false }
        ];
        this.newBug = '';
        this.searchBug = '';
        this.sortOrder = { name: '', descending: false };
    }
    BugTracker.prototype.onAddNew = function () {
        this.bugs.push(this.bugOperations.createNew(this.newBug));
    };
    BugTracker.prototype.toggle = function (bug) {
        this.bugOperations.toggle(bug);
    };
    BugTracker.prototype.removeClosed = function () {
        for (var i = this.bugs.length - 1; i >= 0; i--) {
            if (this.bugs[i].isClosed)
                this.bugs.splice(i, 1);
        }
    };
    BugTracker = __decorate([
        core_1.Component({
            selector: 'bug-tracker',
            styleUrls: ['style.css'],
            template: "\n    <div class=\"content\">\n        <section class=\"stats\">\n            <span class=\"closed\">{{bugs | closedCount}}</span>\n            <span> / </span>\n            <span>{{bugs.length}}</span>\n        </section>\n        <section class=\"search\">\n            <label for=\"\">Search :</label>\n            <input type=\"text\" [(ngModel)]=\"searchBug\">\n            <label for=\"\">Is Closed :</label>\n            <input type=\"checkbox\" >\n        </section>\n        <section class=\"sort\">\n            <label for=\"\">Order By :</label>\n            <input type=\"text\" [(ngModel)] = \"sortOrder.name\">\n            <label for=\"\">Descending ? :</label>\n            <input type=\"checkbox\" [(ngModel)] = \"sortOrder.descending\">\n        </section>\n        <section class=\"edit\">\n            <label for=\"\">Bug :</label>\n            <input type=\"text\" [(ngModel)]=\"newBug\">\n            <input type=\"button\" value=\"Add New\" (click)=\"onAddNew()\">\n        </section>\n        <section class=\"list\">\n            <ol>\n               <li [className]=\"bug.isClosed ? 'closed' : ''\" *ngFor=\"let bug of (bugs | filter:searchBug | sort:sortOrder)\" (click) = \"toggle(bug)\">\n                    {{bug.name | trimText}}\n               </li>\n            </ol>\n            <input type=\"button\" value=\"Remove Closed\" (click)=\"removeClosed()\">\n        </section>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [bugOperations_1.BugOperations])
    ], BugTracker);
    return BugTracker;
}());
exports.BugTracker = BugTracker;
//# sourceMappingURL=bug-tracker.component.js.map