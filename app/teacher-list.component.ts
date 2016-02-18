import {Component, ViewEncapsulation} from 'angular2/core';
import {HighlightDirective} from "./hightlight.directive";

@Component({
    selector:"teacher-list",
    template:`
        <div class='teacher-list'>
            <div >Teacher list</div>
            <div [style.color]="color"> Pending....</div>
            <span myHighlight>Highlight me!</span>
        </div>

    `,
    styleUrls: ['css/teacher-list.css'],
    encapsulation: ViewEncapsulation.Emulated,
    directives:[HighlightDirective]

})
export class TeacherListComponent{
    public color = 'red';


}
