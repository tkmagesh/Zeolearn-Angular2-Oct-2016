import {Component}  from '@angular/core'


@Component({
    selector : 'myapp',
    template : '<div><h1>{{message}}</h1><apptime></apptime></div>'
})
export class MyAppComponent{
    message:string = 'Angular 2.0 is awesome!';
}

