import {Component} from '@angular/core';

@Component({
    selector : 'salary-calculator',
    templateUrl : '/app/salaryCalculator/calculator.template.html'
})
export class SalaryCalculatorComponent{
    salary : number = 0;
    tax : number = 0;
    onCalculate(txtBasic, txtHra, txtDa, rangeTax){
        let basic = parseInt(txtBasic.value,10),
            hra = parseInt(txtHra.value,10),
            da = parseInt(txtDa.value,10);
        
        let gross = basic + hra + da;
        this.salary = gross * ((100-this.tax)/100);
    }

    onTaxChange(rangeTax){
        this.tax = parseInt(rangeTax.value,10);
    }
}