import { Component } from '@angular/core';
import {MessageService} from './MessageService';

@Component({
    selector: 'my-app',
    template: `<h1>{{message}}</h1>`
})
export class AppComponent {
    message:string = 'Hello Angular!';
    constructor(private messageService: MessageService){
        this.message = messageService.getMessage();
    }
 }
