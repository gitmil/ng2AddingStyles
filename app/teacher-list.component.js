var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var TeacherListComponent = (function () {
    function TeacherListComponent() {
        this.color = 'red';
    }
    TeacherListComponent = __decorate([
        core_1.Component({
            selector: "teacher-list",
            template: "\n        <div class='teacher-list'>\n            <div >Teacher list</div>\n            <div [style.color]=\"color\"> Pending....</div>\n        </div>\n\n    ",
            styleUrls: ['css/teacher-list.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated
        })
    ], TeacherListComponent);
    return TeacherListComponent;
})();
exports.TeacherListComponent = TeacherListComponent;
//# sourceMappingURL=teacher-list.component.js.map