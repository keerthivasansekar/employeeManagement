import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { LoginPage } from './pages/auth/login-page/login-page';
import { ForgotUsername } from './pages/auth/forgot-username/forgot-username';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            { path: 'login', component: LoginPage },
            { path: 'forgot-username', component: ForgotUsername },
            { path: 'forgot-password', component: ForgotPassword },
        ]
    },
    {
        path: 'admin',
        component: MainLayout, 
        children: [
            { path: 'dashboard', component: Dashboard },
        ]
    },
    { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }
];
