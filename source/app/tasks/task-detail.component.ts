import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
@Component({
    moduleId: module.id,
    selector: 'task-detail',
    templateUrl: 'task-detail.component.html',
  
})
export class TaskDetailComponent implements OnInit {
    task: Task;
    private isNew: boolean = true;
    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void{
        console.log("onInit");
        this.task = new Task(0,'','','');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if(id) {
                this.isNew = false;
               
                this.taskService.getTask(id)
                    .then((task: Task) => {
                        this.task = task;
                    });
             }
        });
    }

    onSubmit(): void{
        let promise;
        console.log('novo:', this.isNew);
        if (this.isNew) {
            //console.log("cadastrar tarefa");
            promise = this.taskService.create(this.task);
         
        } else {
            promise = this.taskService.update(this.task);
        }

        promise.then(task => this.goBack());
    }
    goBack(): void{
        this.location.back();
    }
    getFormGroupClass(isValid: boolean, isPristine: boolean):{} {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    getFormControlClass(isValid: boolean, isPristine: boolean):{} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }
}