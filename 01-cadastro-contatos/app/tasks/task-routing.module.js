"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const tasks_lista_component_1 = require("./tasks-lista.component");
const task_detail_component_1 = require("./task-detail.component");
const taskRoutes = [
    {
        path: 'tarefa',
        component: tasks_lista_component_1.TaskListaComponent
    },
    {
        path: 'tarefa/save',
        component: task_detail_component_1.TaskDetailComponent
    },
    {
        path: 'tarefa/save/:id',
        component: task_detail_component_1.TaskDetailComponent
    }
];
let TaskRoutingModule = class TaskRoutingModule {
};
TaskRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(taskRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], TaskRoutingModule);
exports.TaskRoutingModule = TaskRoutingModule;
//# sourceMappingURL=task-routing.module.js.map