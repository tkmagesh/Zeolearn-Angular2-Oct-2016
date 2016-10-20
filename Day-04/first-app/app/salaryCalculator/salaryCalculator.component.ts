import {Component} from '@angular/core';
import {SalaryCalculator} from './SalaryCalculator';

@Component({
    selector : 'salary-calculator',
    templateUrl : '/app/salaryCalculator/calculator.template.html'
})
export class SalaryCalculatorComponent{
    calculator : SalaryCalculator = new SalaryCalculator();

    onCalculate(){
       this.calculator.calculate();
    }

    
}