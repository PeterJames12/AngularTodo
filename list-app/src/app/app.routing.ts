import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import {TaskComponent} from "./task/task.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: TaskComponent, canActivate: [AuthGuard] },
    //
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
