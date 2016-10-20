import {Component}  from '@angular/core'


@Component({
    selector : 'myapp',
    template : `
        <div>
            <salary-calculator></salary-calculator>
        </div>`
})
export class MyAppComponent{
    message:string = 'Angular 2.0 is awesome!';
}

