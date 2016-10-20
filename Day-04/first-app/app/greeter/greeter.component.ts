import {Component} from '@angular/core';

@Component({
    selector : 'greeter',
    template : `
        <h3>Greeter</h3>
        <hr/>
        <label>Name :</label>
        <input type="text" #txtName>
        <input type="button" value="Greet" (click) = "onGreet(txtName)">
        <div>{{message}}</div>
    `
})
export class GreeterComponent{
    message : string = 'Hi there!';

    onGreet(txtNameElement){
        this.message = `Hi ${txtNameElement.value}!!!`;
    }
}