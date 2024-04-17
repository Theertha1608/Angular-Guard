import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { adminGuard } from './admin.guard';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'dashboard-component',
        component: DashboardComponent,
        canActivate:[authGuard]
    },
    {
        path: 'profile-component',
        component: ProfileComponent,
        canActivate:[adminGuard]
    },
    
    {
        path: 'settings-component',
        component: SettingsComponent,
    },
];
