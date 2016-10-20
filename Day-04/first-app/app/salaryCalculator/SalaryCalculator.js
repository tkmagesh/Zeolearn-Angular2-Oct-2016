"use strict";
var SalaryCalculator = (function () {
    function SalaryCalculator() {
        this.basic = 0;
        this.hra = 0;
        this.da = 0;
        this.tax = 0;
        this.salary = 0;
    }
    SalaryCalculator.prototype.calculate = function () {
        var gross = this.basic + this.hra + this.da;
        var net = gross * ((100 - this.tax) / 100);
        this.salary = net;
    };
    return SalaryCalculator;
}());
exports.SalaryCalculator = SalaryCalculator;
//# sourceMappingURL=SalaryCalculator.js.map