import {Component} from '@angular/core';
@Component({
    selector : 'apptime',
    template : '<div>{{currentTime}}</div>'
})
export class TimeComponent{
    currentTime = new Date().toString();
}