import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { LoginModule } from 'app/main/pages/authentication/login/login.module';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './tky/servicesTKY/loginUtils/auth.service';
import {AuthGuard} from './tky/servicesTKY/loginUtils/auth.guard';
import {AuthGuardLogin} from './tky/servicesTKY/loginUtils/auth.guard.login';
import { TokenInterceptorService } from './tky/servicesTKY/loginUtils/token-interceptor';
// import { CrearCategoriaComponent } from './daw/categoria/crear-categoria/crear-categoria.component';




const appRoutes: Routes = [
    {
        path        : 'apps',
        canActivate:[AuthGuard],
        loadChildren: './main/apps/apps.module#AppsModule'

    },
    {
        path        : 'pages',
        
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path        : 'ui',
        canActivate:[AuthGuard],
        loadChildren: './main/ui/ui.module#UIModule'
    },
    {
        path        : 'documentation',
        canActivate:[AuthGuard],
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },
    {
        path        : 'angular-material-elements',
        canActivate:[AuthGuard],
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path:'tky',
        canActivate:[AuthGuard],
        loadChildren:'./tky/tky.module#tkyModel'
    },
    {
        path:'daw',
        canActivate: [AuthGuard],
        loadChildren: './daw/daw.module#dawModel'
    },
    // {
    //     path: 'tky/prueba-comp',
    //     canActivate:[AuthGuard],
    //     component: PruebaCompComponent

    // },

    // {
    //     path: 'tky/ConsultarTracking',
    //     canActivate:[AuthGuard],
    //     component: ConsultarTrackingComponent
    // },
    // {
    //     path: 'tky/ConsultarMapeo',
    //     canActivate:[AuthGuard],
    //     component: ConsultarMapeoComponent
    // },

    {
        path         : '',
        pathMatch: 'full' ,
        redirectTo: 'pages/auth/login-2',

    },

    {
        path : '**',
        redirectTo: 'pages/errors/error-404'
    }
    

    

];

@NgModule({
    declarations: [
        AppComponent
      
       
        
       
        
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        LoginModule,
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

       FormsModule,
       ReactiveFormsModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        FuseSharedModule,

    ],
    bootstrap   : [
        AppComponent
    ],providers: [
        AuthService,TokenInterceptorService,AuthGuard,AuthGuardLogin,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ]
})
export class AppModule
{ 
}
