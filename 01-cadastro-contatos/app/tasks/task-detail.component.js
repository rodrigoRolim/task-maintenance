"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const task_service_1 = require("./task.service");
const task_model_1 = require("./task.model");
let TaskDetailComponent = class TaskDetailComponent {
    constructor(taskService, route, location) {
        this.taskService = taskService;
        this.route = route;
        this.location = location;
        this.isNew = true;
    }
    ngOnInit() {
        console.log("onInit");
        this.task = new task_model_1.Task(0, '', '', '');
        this.route.params.forEach((params) => {
            let id = +params['id'];
            if (id) {
                this.isNew = false;
                this.taskService.getTask(id)
                    .then((task) => {
                    this.task = task;
                });
            }
        });
    }
    onSubmit() {
        let promise;
        console.log('novo:', this.isNew);
        if (this.isNew) {
            //console.log("cadastrar tarefa");
            promise = this.taskService.create(this.task);
        }
        else {
            promise = this.taskService.update(this.task);
        }
        promise.then(task => this.goBack());
    }
    goBack() {
        this.location.back();
    }
    getFormGroupClass(isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }
};
TaskDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task-detail',
        templateUrl: 'task-detail.component.html',
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        router_1.ActivatedRoute,
        common_1.Location])
], TaskDetailComponent);
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map