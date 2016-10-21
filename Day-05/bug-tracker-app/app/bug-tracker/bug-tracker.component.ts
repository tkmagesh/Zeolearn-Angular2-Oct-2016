import {Component} from '@angular/core';
@Component({
    selector : 'bug-tracker',
    styleUrls : ['style.css'],
    template : `
    <div class="content">
        <section class="stats">
            <span class="closed">{{getClosedCount()}}</span>
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
            <input type="text" [(ngModel)] = "sortOrder">
            <label for="">Descending ? :</label>
            <input type="checkbox" >
        </section>
        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" [(ngModel)]="newBug">
            <input type="button" value="Add New" (click)="onAddNew()">
        </section>
        <section class="list">
            <ol>
               <li [className]="bug.isClosed ? 'closed' : ''" *ngFor="let bug of bugsToDisplay()" (click) = "toggle(bug)">
                    {{bug.name}}-{{bug.isClosed}}
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

    //sortOrder:{name : string, descending : boolean } = {name : '', descending : false};
    sortOrder:string = '';

    onAddNew(){
        this.bugs.push({
            name : this.newBug,
            isClosed : false
        });
    }

    toggle(bug){
        bug.isClosed = !bug.isClosed;
    }
    
    removeClosed(){
        for(let i:number = this.bugs.length-1; i >=0; i--){
            if (this.bugs[i].isClosed)
                this.bugs.splice(i,1);
        }
    }

    getClosedCount(){
        return this.bugs.reduce(function(result, bug){
            return bug.isClosed ? ++result : result;
        },0)
    }

    getFilteredBugs(){
        return this.searchBug ? this.bugs.filter(bug => bug.name.indexOf(this.searchBug) !== -1) : this.bugs; 
        /*
        if (this.searchBug){
            return this.bugs.filter(bug => bug.name.indexOf(this.searchBug) !== -1);
        } else {
            return this.bugs;
        }
        */
    }

    bugsToDisplay(){
        let filteredBugs = this.getFilteredBugs();
        console.log(this.sortOrder);
        if (this.sortOrder === 'name'){
            return filteredBugs.sort(function(b1, b2){
                if (b1[this.sortOrder] > b2[this.sortOrder]) return 1;
                if (b1[this.sortOrder] < b2[this.sortOrder]) return -1;
                return 0;
            } )
        } else {
            return filteredBugs;
        }
    }
}