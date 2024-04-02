import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo-mfe',
        pathMatch: 'full'
    },
    {
        path: 'todo-mfe',
        component: TodoListComponent
    }
];
