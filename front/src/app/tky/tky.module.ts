import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthService} from './servicesTKY/loginUtils/auth.service'
import {AuthGuardLogin}from './servicesTKY/loginUtils/auth.guard.login'
import {APIservice} from './servicesTKY/services'
import {DialogService} from './servicesTKY/dialogService'
import {MatConfirmDialogComponent} from './modal_message/modal_message'
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {AuthGuard}from './servicesTKY/loginUtils/auth.guard'
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {TokenInterceptorService}from './servicesTKY/loginUtils/token-interceptor'
import {ConsultGuiaExtComponent}from './consult-guia-ext/consult-guia-ext.component'
import {ConsultarTrackingComponent}from './consultar-tracking/consultar-tracking.component'
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import {DialogFormTramaco} from './consult-guia-ext/modal_mapeo_tramaco/dialog_form_tramaco'
import {DialogFormLaar} from './consult-guia-ext/modal_mapeo_laar/dialog_form_laar'
import { CrearguiaextComponent } from './crearguiaext/crearguiaext.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const router =[ {
path:'consultguiaext',
component:ConsultGuiaExtComponent

},{
    path:'consultracking',
    component:ConsultarTrackingComponent

},

{
  path:'crearguia',
  component: CrearguiaextComponent
}


]
@NgModule({
    declarations:[ConsultGuiaExtComponent,ConsultarTrackingComponent, DialogFormLaar,CrearguiaextComponent,DialogFormTramaco,MatConfirmDialogComponent],
    entryComponents: [DialogFormTramaco,DialogFormLaar,MatConfirmDialogComponent],
    imports: [RouterModule.forChild(router),
        HttpClientModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDividerModule,
        CommonModule,
        MatMenuModule,
        MatDialogModule,
        MatBadgeModule,
        MatSelectModule,
        MatSortModule,
        MatBottomSheetModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule, 
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatGridListModule
    ],
    providers: [AuthService,TokenInterceptorService,AuthGuard,AuthGuardLogin,APIservice,DialogService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ]
    
})
export class tkyModel{

}
