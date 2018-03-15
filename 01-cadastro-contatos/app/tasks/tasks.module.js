"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const task_detail_component_1 = require("./task-detail.component");
const tasks_lista_component_1 = require("./tasks-lista.component");
const task_routing_module_1 = require("./task-routing.module");
const task_service_1 = require("./task.service");
const forms_1 = require("@angular/forms");
const task_busca_component_1 = require("./task-busca.component");
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            task_routing_module_1.TaskRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            task_detail_component_1.TaskDetailComponent,
            tasks_lista_component_1.TaskListaComponent,
            task_busca_component_1.TaskBuscaComponent
        ],
        exports: [
            tasks_lista_component_1.TaskListaComponent,
            task_busca_component_1.TaskBuscaComponent
        ],
        providers: [
            task_service_1.TaskService
        ]
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=tasks.module.js.map