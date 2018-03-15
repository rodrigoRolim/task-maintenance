import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './tasks/task.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        let tasks: Task[] = [
            {id:1,tarefa:"Construir projeto A",descricao:"Construir o módulo A",data:"23/12/2018"},
            {id:2,tarefa:"Pensar sobre a vida",descricao:"Ficar sentado pensando",data:"23/12/2018"},
            {id:3,tarefa:"Andar 10 metros",descricao:"Andar 10 e voltar a dormir",data:"23/12/2018"},
            {id:4,tarefa:"Almoçar no hangar",descricao:"Não, é muito longe",data:"23/12/2018"},
            {id:5,tarefa:"E vai ficar com Fome?",descricao:"Vou, e dai?",data:"23/12/2018"}
        ];
        return {tasks};
    }
   
}