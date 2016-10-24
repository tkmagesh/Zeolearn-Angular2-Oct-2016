import {Component} from '@angular/core';
import {BugOperations} from './services/bugOperations';

@Component({
    selector : 'bug-tracker',
    styleUrls : ['style.css'],
    template : `
    <div class="content">
        <bug-stats [Bugs]="bugs"></bug-stats>
        <bug-search (OnSearch)="onSearchBug($event)"></bug-search>
        <bug-sort (OnSort)="onSortBug($event)"></bug-sort>
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
    onSearchBug(bugName){
        console.log('search bug name = ', bugName);
        this.searchBug = bugName;
    }

    onSortBug(sortOrder){
        this.sortOrder = sortOrder;
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