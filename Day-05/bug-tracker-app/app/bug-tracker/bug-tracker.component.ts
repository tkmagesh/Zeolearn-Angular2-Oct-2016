import {Component} from '@angular/core';
import {BugOperations} from './services/bugOperations';

@Component({
    selector : 'bug-tracker',
    styleUrls : ['style.css'],
    template : `
    <div class="content">
        <section class="stats">
            <span class="closed">{{bugs | closedCount}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
        <section class="search">
            <label for="">Search :</label>
            <input type="text" [(ngModel)]="searchBug">
            <label for="">Is Closed :</label>
            <input type="checkbox" >
        </section>
        <section class="sort">
            <label for="">Order By :</label>
            <input type="text" [(ngModel)] = "sortOrder.name">
            <label for="">Descending ? :</label>
            <input type="checkbox" [(ngModel)] = "sortOrder.descending">
        </section>
        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" [(ngModel)]="newBug">
            <input type="button" value="Add New" (click)="onAddNew()">
        </section>
        <section class="list">
            <ol>
               <li [className]="bug.isClosed ? 'closed' : ''" *ngFor="let bug of (bugs | filter:searchBug | sort:sortOrder)" (click) = "toggle(bug)">
                    {{bug.name | trimText}}
               </li>
            </ol>
            <input type="button" value="Remove Closed" (click)="removeClosed()">
        </section>
    </div>
    `
})
export class BugTracker{
    bugs : Array<{name : string, isClosed : boolean}> = [
        { name : 'User action not recognized', isClosed : false},
        { name :'Server communication failure', isClosed : false},
        { name : 'Application not responsive', isClosed : true},
        { name : 'Unable to add a new bug', isClosed : false}
    ];

    newBug:string = '';

    searchBug:string = '';

    sortOrder:{name : string, descending : boolean } = {name : '', descending : false};
    //sortOrder:string = '';

    constructor(private bugOperations : BugOperations){
        
    }

    onAddNew(){
        this.bugs.push(this.bugOperations.createNew(this.newBug));
    }

    toggle(bug){
        this.bugOperations.toggle(bug);
    }
    
    removeClosed(){
        for(let i:number = this.bugs.length-1; i >=0; i--){
            if (this.bugs[i].isClosed)
                this.bugs.splice(i,1);
        }
    }
}