import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { resolveUserTasks, TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './app/users/user-tasks/user-tasks.component';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from './app/tasks/new-task/new-task.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }

  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TasksComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
