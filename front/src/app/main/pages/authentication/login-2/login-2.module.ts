import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {AuthGuardLogin} from '../../../../tky/servicesTKY/loginUtils/auth.guard.login';
import { FuseSharedModule } from '@fuse/shared.module';

import { Login2Component } from './login-2.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../../../../tky/servicesTKY/loginUtils/auth.service';
import {AuthGuard} from '../../../../tky/servicesTKY/loginUtils/auth.guard'
import { TokenInterceptorService } from '../../../../tky/servicesTKY/loginUtils/token-interceptor';

const routes = [
    {
        path     : 'auth/login-2',
        canActivate:[AuthGuardLogin],
        component: Login2Component
    }
];

@NgModule({
    declarations: [
        Login2Component
        
    ],
    imports     : [
        RouterModule.forChild(routes),
        
    HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule
    ],providers: [AuthService,TokenInterceptorService,AuthGuard,AuthGuardLogin,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ]
})
export class Login2Module
{
}
