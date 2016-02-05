import {Component, ViewEncapsulation} from 'angular2/core';

interface studentListItem {
    id:number;
    name:string;
}
//adding a template (inline)
//Interpolation {{}} weave calculated strings into the text between HTML element tags and within attribute assignments
//Pipeoperators
//adding a directive
//property binding
//adding an event
//event bidning

//adding styles


@Component({

    selector:"student-list",
    template:`


    <!--inline-style-->

    <!--<style>-->
    <!--.student-list {-->
    <!--background: yellow;-->

    <!--}-->
    <!--</style>-->


    <div class="student-list">
        <div>Student List</div>
        <ul *ngIf="isAdd">
            <li *ngFor="#student of studentListItems">
                <span>{{student.id }})</span>
                <span>{{student.name | uppercase}}</span>
            </li>
        </ul>
        <button (click)="isAdd=!isAdd" [disabled]="isAdd">Add List</button>
        <button (click)="isAdd=!isAdd" [disabled]="!isAdd">Remove List</button>

        </div>

    `,
    //styles:[`.student-list {
    //  background: green;
    //} `],
    styleUrls: ['css/student-list.css'],
    encapsulation: ViewEncapsulation.Emulated
    //encapsulation: ViewEncapsulation.Emulated,
    //encapsulation: ViewEncapsulation.Native

})

//adding a public property
export class StudentListComponent{

    //by default all the properties are public
    public studentListItems : studentListItem[] = [
        {id:1,name:"john"},
        {id:2,name:"jane"},
        {id:3,name:"peter"}
    ];

    public isAdd = true;




}