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
const Observable_1 = require("rxjs/Observable");
const Subject_1 = require("rxjs/Subject");
const task_service_1 = require("./task.service");
const router_1 = require("@angular/router");
let TaskBuscaComponent = class TaskBuscaComponent {
    constructor(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.buscaChange = new core_1.EventEmitter();
        this.termosDaBusca = new Subject_1.Subject();
    }
    ngOnInit() {
        this.tasks = this.termosDaBusca
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.taskService.search(term) : Observable_1.Observable.of([]))
            .catch(err => {
            console.log(err);
            return Observable_1.Observable.of([]);
        });
    }
    ngOnChanges(changes) {
        let busca = changes['busca'];
        console.log(busca);
        this.search(busca.currentValue);
    }
    search(termo) {
        console.log(termo);
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }
    verDetalhe(task) {
        let link = ['tarefa/save', task.id];
        this.router.navigate(link);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskBuscaComponent.prototype, "busca", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TaskBuscaComponent.prototype, "buscaChange", void 0);
TaskBuscaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task-busca',
        templateUrl: 'task-busca.component.html',
        styles: [`
        .cursor-pointer:hover{
            cursor: pointer;
        }     
    `]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        router_1.Router])
], TaskBuscaComponent);
exports.TaskBuscaComponent = TaskBuscaComponent;
//# sourceMappingURL=task-busca.component.js.map