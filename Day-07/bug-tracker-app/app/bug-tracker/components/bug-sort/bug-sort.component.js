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
var BugSort = (function () {
    function BugSort() {
        this.sortOrder = { name: '', descending: false };
        this.OnSort = new core_1.EventEmitter();
    }
    BugSort.prototype.setSortOrder = function () {
        this.OnSort.emit(this.sortOrder);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BugSort.prototype, "OnSort", void 0);
    BugSort = __decorate([
        core_1.Component({
            selector: 'bug-sort',
            styleUrls: ['style.css'],
            template: "\n    <section class=\"sort\">\n            <label for=\"\">Order By :</label>\n            <input type=\"text\" [(ngModel)] = \"sortOrder.name\" (keyup)=\"setSortOrder()\">\n            <label for=\"\">Descending ? :</label>\n            <input type=\"checkbox\" [(ngModel)] = \"sortOrder.descending\" (click)=\"setSortOrder()\">\n        </section>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BugSort);
    return BugSort;
}());
exports.BugSort = BugSort;
//# sourceMappingURL=bug-sort.component.js.map