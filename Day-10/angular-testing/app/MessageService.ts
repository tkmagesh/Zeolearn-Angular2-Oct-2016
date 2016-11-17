import {Injectable} from '@angular/core';

@Injectable()
export class MessageService{
    getMessage(){
        return 'A sample dummy text for ';
    }
}