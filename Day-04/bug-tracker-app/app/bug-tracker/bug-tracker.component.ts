import {Component} from '@angular/core';
@Component({
    selector : 'bug-tracker',
    styleUrls : ['style.css'],
    template : `
    <div class="content">
        <section class="stats">
            <span class="closed">2</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
        <section class="search">
            <label for="">Search :</label>
            <input type="text" name="" id="">
            <label for="">Is Closed :</label>
            <input type="checkbox" name="" id="">
        </section>
        <section class="sort">
            <label for="">Order By :</label>
            <input type="text" name="" id="">
            <label for="">Descending ? :</label>
            <input type="checkbox" name="" id="">
        </section>
        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" [(ngModel)]="newBug">
            <input type="button" value="Add New" (click)="onAddNew()">
        </section>
        <section class="list">
            <ol>
               <li [className]="bug.isClosed ? 'closed' : ''" *ngFor="let bug of bugs" (click) = "toggle(bug)">
                    {{bug.name}}-{{bug.isClosed}}
               </li>
            </ol>
            <input type="button" value="Remove Closed">
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

    onAddNew(){
        this.bugs.push({
            name : this.newBug,
            isClosed : false
        });
    }

    toggle(bug){
        bug.isClosed = !bug.isClosed;
    }

}