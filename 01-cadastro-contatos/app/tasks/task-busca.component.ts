import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'task-busca',
    templateUrl: 'task-busca.component.html',
    styles: [ `
        .cursor-pointer:hover{
            cursor: pointer;
        }     
    `]
})

export class TaskBuscaComponent implements OnInit, OnChanges {
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
    tasks: Observable<Task[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();
    constructor(
        private taskService: TaskService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.tasks =  this.termosDaBusca
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.taskService.search(term) : Observable.of<Task[]>([]))
        .catch(err => {
            console.log(err);
            return Observable.of<Task[]>([]);   
        });
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        console.log(busca);
        this.search(busca.currentValue);
    }
    search(termo: string): void {
        console.log(termo);
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }
    verDetalhe(task: Task): void {
        let link = ['tarefa/save', task.id];
        this.router.navigate(link);
    }
}