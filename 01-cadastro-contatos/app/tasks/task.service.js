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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.tarefasUrl = "app/tasks";
        this.headers = new http_1.Headers({ 'Content-Type': 'aplication/json' });
    }
    getTasks() {
        return this.http.get(this.tarefasUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
        // return Promise.resolve(TASKS);
    }
    handleError(err) {
        console.log("Error:", err);
        return Promise.reject(err.message || err);
    }
    getTask(id) {
        return this.getTasks()
            .then((tasks) => tasks.find(task => task.id === id));
    }
    create(task) {
        return this.http
            .post(this.tarefasUrl, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }
    update(task) {
        const url = `${this.tarefasUrl}/${task.id}`;
        return this.http
            .put(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }
    delete(task) {
        const url = `${this.tarefasUrl}/${task.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }
    getTaskSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
            .then(() => {
            console.log("primeiro then");
            return 'angular 2';
        })
            .then((param) => {
            console.log("segundo then");
            console.log(param);
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('continuado depois de 4 segundos...');
                    resolve2();
                }, 4000);
            });
        })
            .then(() => {
            console.log('terceiro then');
            return this.getTasks();
        });
    }
    search(term) {
        console.log(term + " away");
        return this.http
            .get(`${this.tarefasUrl}/?tarefa=${term}`)
            .map((res) => res.json().data);
    }
};
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map