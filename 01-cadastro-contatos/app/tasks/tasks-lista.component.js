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
const task_service_1 = require("./task.service");
const dialog_service_1 = require("./../dialog.service");
let TaskListaComponent = class TaskListaComponent {
    constructor(taskService, dialogService) {
        this.taskService = taskService;
        this.dialogService = dialogService;
        this.tasks = [];
    }
    ngOnInit() {
        this.taskService.getTasks()
            .then((tasks) => {
            this.tasks = tasks;
        }).catch(err => {
            console.log(err);
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar lista de tarefas'
            });
        });
    }
    onDelete(task) {
        this.dialogService.confirm('deseja deletar a tarefa ' + task.tarefa + ' ?')
            .then((canDelete) => {
            console.log(canDelete);
            if (canDelete) {
                this.taskService
                    .delete(task)
                    .then(() => {
                    this.tasks = this.tasks.filter((t) => t.id != task.id);
                    this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'contato deletado'
                    });
                }).catch(err => {
                    this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro'
                    });
                });
            }
        });
    }
    mostrarMensagem(mensagem) {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeOut) {
                clearTimeout(this.currentTimeOut);
            }
            this.currentTimeOut = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }
    montarClasses(tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }
};
TaskListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks-lista',
        templateUrl: 'tasks-lista.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        dialog_service_1.DialogService])
], TaskListaComponent);
exports.TaskListaComponent = TaskListaComponent;
//# sourceMappingURL=tasks-lista.component.js.map