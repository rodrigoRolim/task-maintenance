import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { DialogService } from './../dialog.service';

@Component({
    moduleId: module.id,
    selector: 'tasks-lista',
    templateUrl: 'tasks-lista.component.html'
})
export class TaskListaComponent implements OnInit{
    tasks: Task[] = [];
    mensagem: {};
    classesCss: {}; 
    private currentTimeOut: any;
    constructor(
        private taskService: TaskService,
        private dialogService: DialogService
    ) {}
    ngOnInit(): void{
       this.taskService.getTasks()
                .then((tasks: Task[]) => {
                    this.tasks = tasks;
                }).catch(err => {
                    console.log(err);
                    this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao buscar lista de tarefas'
                    });
                });
    }
    onDelete(task: Task):void {
        this.dialogService.confirm('deseja deletar a tarefa '+task.tarefa+' ?')
            .then((canDelete: boolean) => {
                console.log(canDelete);
                if(canDelete) {
                    this.taskService
                        .delete(task)
                        .then(() => {
                            this.tasks = this.tasks.filter((t: Task) => t.id != task.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'contato deletado'
                            });
                        }).catch(err => {
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro'
                            })
                        });
                }
            });
    }
    private mostrarMensagem(mensagem: {tipo: string, texto: string}): void{
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if(mensagem.tipo != 'danger') {
            if (this.currentTimeOut){
                clearTimeout(this.currentTimeOut);
            }
            this.currentTimeOut = setTimeout(() => {
                this.mensagem = undefined;
            },3000)
        }
    }
    private montarClasses(tipo: string): void{
        this.classesCss = {
            'alert':true
        };
        this.classesCss['alert-' + tipo] = true;
    }
}