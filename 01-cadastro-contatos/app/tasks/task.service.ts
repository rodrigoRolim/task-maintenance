import {Injectable } from '@angular/core';
import { TASKS } from './tasks-mock';
import { Task } from './task.model';
import { Http, Headers, Response } from  '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
    private tarefasUrl: string = "app/tasks";
    private headers: Headers = new Headers({'Content-Type': 'aplication/json'});
    constructor(
        private http: Http
    ){}
    getTasks(): Promise<Task[]> {
        return this.http.get(this.tarefasUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
       // return Promise.resolve(TASKS);
    }
    private handleError(err: any): Promise<any> {
        console.log("Error:",err);
        return Promise.reject(err.message || err);
    }
    getTask(id: number): Promise<Task>{
        return this.getTasks()
                .then((tasks: Task[]) => tasks.find(task => task.id === id));
    }
    create(task: Task): Promise<Task>{
        return this.http
            .post(this.tarefasUrl, JSON.stringify(task), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json() as Task)
            .catch(this.handleError);

    }
    update(task: Task): Promise<Task>{
    
        const url = `${this.tarefasUrl}/${task.id}`;
        return this.http
            .put(url, JSON.stringify(task), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json() as Task)
            .catch(this.handleError);

    }
    delete(task: Task): Promise<Task> {
        const url = `${this.tarefasUrl}/${task.id}`;
        return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json() as Task)
        .catch(this.handleError);
    }
    getTaskSlowly(): Promise<Task[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve,3000);
        })
        .then(() => {
            console.log("primeiro then");
            return 'angular 2';
        })
        .then((param: string) => {
            console.log("segundo then");
            console.log(param);
            
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('continuado depois de 4 segundos...');
                    resolve2();
                }, 4000);
            })
        })
        .then(() => {
            console.log('terceiro then');
            return this.getTasks()
        });
    }
    search(term: string): Observable<Task[]> {
        console.log(term+" away");
        return this.http
            .get(`${this.tarefasUrl}/?tarefa=${term}`)
            .map((res : Response) => res.json().data as Task[]);

    }
}