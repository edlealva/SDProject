import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {APIservice} from '../../../../tky/servicesTKY/services';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { Register2Component } from 'app/main/pages/authentication/register-2/register-2.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../../../tky/servicesTKY/loginUtils/token-interceptor';

const routes = [
    {
        path     : 'auth/register-2',
        component: Register2Component
    }
];

@NgModule({
    declarations: [
        Register2Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        FuseSharedModule
    ], providers: [APIservice,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ]

})
export class Register2Module
{
}
