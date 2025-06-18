import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Register } from './register/register';

export const routes: Routes = [    
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'login', component:Login},
    {path:'logout', component:Logout},
    {path:'register', component:Register, outlet:'admin'}
];
