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
var GreeterComponent = (function () {
    function GreeterComponent() {
        this.message = 'Hi there!';
    }
    GreeterComponent.prototype.onGreet = function (txtNameElement) {
        this.message = "Hi " + txtNameElement.value + "!!!";
    };
    GreeterComponent = __decorate([
        core_1.Component({
            selector: 'greeter',
            template: "\n        <h3>Greeter</h3>\n        <hr/>\n        <label>Name :</label>\n        <input type=\"text\" #txtName>\n        <input type=\"button\" value=\"Greet\" (click) = \"onGreet(txtName)\">\n        <div>{{message}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GreeterComponent);
    return GreeterComponent;
}());
exports.GreeterComponent = GreeterComponent;
//# sourceMappingURL=greeter.component.js.map