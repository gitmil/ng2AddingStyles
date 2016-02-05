var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
//adding a template (inline)
//Interpolation {{}} weave calculated strings into the text between HTML element tags and within attribute assignments
//Pipeoperators
//adding a directive
//property binding
//adding an event
//event bidning
//adding styles
var StudentListComponent = (function () {
    function StudentListComponent() {
        //by default all the properties are public
        this.studentListItems = [
            { id: 1, name: "john" },
            { id: 2, name: "jane" },
            { id: 3, name: "peter" }
        ];
        this.isAdd = true;
    }
    StudentListComponent = __decorate([
        core_1.Component({
            selector: "student-list",
            template: "\n\n\n    <!--inline-style-->\n\n    <!--<style>-->\n    <!--.student-list {-->\n    <!--background: yellow;-->\n\n    <!--}-->\n    <!--</style>-->\n\n\n    <div class=\"student-list\">\n        <div>Student List</div>\n        <ul *ngIf=\"isAdd\">\n            <li *ngFor=\"#student of studentListItems\">\n                <span>{{student.id }})</span>\n                <span>{{student.name | uppercase}}</span>\n            </li>\n        </ul>\n        <button (click)=\"isAdd=!isAdd\" [disabled]=\"isAdd\">Add List</button>\n        <button (click)=\"isAdd=!isAdd\" [disabled]=\"!isAdd\">Remove List</button>\n\n        </div>\n\n    ",
            //styles:[`.student-list {
            //  background: green;
            //} `],
            styleUrls: ['css/student-list.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated
        })
    ], StudentListComponent);
    return StudentListComponent;
})();
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map