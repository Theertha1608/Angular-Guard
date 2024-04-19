import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'dashboard-component',
        component: DashboardComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'profile-component',
        component: ProfileComponent,
    },
    
    {
        path: 'settings-component',
        component: SettingsComponent,
        canActivate: [AdminGuard] 
        
    },
];
