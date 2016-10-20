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
var BugTracker = (function () {
    function BugTracker() {
        this.bugs = [
            { name: 'User action not recognized', isClosed: false },
            { name: 'Server communication failure', isClosed: false },
            { name: 'Application not responsive', isClosed: true },
            { name: 'Unable to add a new bug', isClosed: false }
        ];
        this.newBug = '';
    }
    BugTracker.prototype.onAddNew = function () {
        this.bugs.push({
            name: this.newBug,
            isClosed: false
        });
    };
    BugTracker.prototype.toggle = function (bug) {
        bug.isClosed = !bug.isClosed;
    };
    BugTracker = __decorate([
        core_1.Component({
            selector: 'bug-tracker',
            styleUrls: ['style.css'],
            template: "\n    <div class=\"content\">\n        <section class=\"stats\">\n            <span class=\"closed\">2</span>\n            <span> / </span>\n            <span>{{bugs.length}}</span>\n        </section>\n        <section class=\"search\">\n            <label for=\"\">Search :</label>\n            <input type=\"text\" name=\"\" id=\"\">\n            <label for=\"\">Is Closed :</label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n        </section>\n        <section class=\"sort\">\n            <label for=\"\">Order By :</label>\n            <input type=\"text\" name=\"\" id=\"\">\n            <label for=\"\">Descending ? :</label>\n            <input type=\"checkbox\" name=\"\" id=\"\">\n        </section>\n        <section class=\"edit\">\n            <label for=\"\">Bug :</label>\n            <input type=\"text\" [(ngModel)]=\"newBug\">\n            <input type=\"button\" value=\"Add New\" (click)=\"onAddNew()\">\n        </section>\n        <section class=\"list\">\n            <ol>\n               <li [className]=\"bug.isClosed ? 'closed' : ''\" *ngFor=\"let bug of bugs\" (click) = \"toggle(bug)\">\n                    {{bug.name}}-{{bug.isClosed}}\n               </li>\n            </ol>\n            <input type=\"button\" value=\"Remove Closed\">\n        </section>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BugTracker);
    return BugTracker;
}());
exports.BugTracker = BugTracker;
//# sourceMappingURL=bug-tracker.component.js.map