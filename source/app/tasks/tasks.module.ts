import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail.component'
import { TaskListaComponent } from './tasks-lista.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { TaskBuscaComponent } from './task-busca.component';
@NgModule({
    imports:[
        CommonModule,
        TaskRoutingModule,
        FormsModule
    ],
    declarations: [
        TaskDetailComponent,
        TaskListaComponent,
        TaskBuscaComponent
    ],
    exports:[
        TaskListaComponent,
        TaskBuscaComponent
    ],
    providers:[
        TaskService
    ]
})
export class TaskModule {}