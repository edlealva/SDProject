import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuseNavigationModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { NavbarVerticalStyle1Component } from 'app/layout/components/navbar/vertical/style-1/style-1.component';
import { AuthService } from './../../../../../tky/servicesTKY/loginUtils/auth.service';
import { TokenInterceptorService } from './../../../../../tky/servicesTKY/loginUtils/token-interceptor';
import { AuthGuard } from './../../../../../tky/servicesTKY/loginUtils/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [
        NavbarVerticalStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseNavigationModule
    ],providers: [
        AuthService,TokenInterceptorService,AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ],
      exports     : [
        NavbarVerticalStyle1Component
    ]
    
})
export class NavbarVerticalStyle1Module
{
}
