import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'   
    },
    {
        path: 'todo-list',
        loadChildren: () => import("mfe-app/TodoListModule").then(m => m.TodoListModule) 
    }
];
