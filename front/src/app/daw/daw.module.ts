import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthService} from '../tky/servicesTKY/loginUtils/auth.service';
import {AuthGuardLogin}from '../tky/servicesTKY/loginUtils/auth.guard.login'
import {APIservice} from '../tky/servicesTKY/services';
import {DialogService} from '../tky/servicesTKY/dialogService'

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {AuthGuard} from '../tky/servicesTKY/loginUtils/auth.guard';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {TokenInterceptorService} from '../tky/servicesTKY/loginUtils/token-interceptor'

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
import {CrearCategoriaComponent} from './categoria/crear-categoria/crear-categoria.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ActualizarCategoriaComponent } from './categoria/actualizar-categoria/actualizar-categoria.component';
import { CombosComponent } from './combo/combos/combos.component';
import { BuscarComboComponent } from './combo/buscar-combo/buscar-combo.component';
import { ListaCategoriaComponent } from './categoria/lista-categoria/lista-categoria.component';
import { MenuEstadisticaComponent } from './menu-estadistica/menu-estadistica.component';
import { ClienteEstadisticaComponent } from './cliente-estadistica/cliente-estadistica.component';
import { ComboEstadisticaComponent } from './combo-estadistica/combo-estadistica.component';
import { ChartsModule } from 'ng2-charts';


const router =[ 
{
  path:'crearcategoria',
  component: CrearCategoriaComponent
},
{
  path: 'actualizarcategoria',
  component: ActualizarCategoriaComponent
},
{
  path: 'combos',
  component: CombosComponent
},
{
  path:'buscarcombos',
  component: BuscarComboComponent
},
{
  path: 'listacategoria',
  component: ListaCategoriaComponent
},
{
  path: 'estadisticacliente',
  component: ClienteEstadisticaComponent
},
{
  path: 'estadisticacombo',
  component: ComboEstadisticaComponent
},
{
  path: 'menu',
  component: MenuEstadisticaComponent
}




]
@NgModule({
    declarations: [CrearCategoriaComponent, ActualizarCategoriaComponent, CombosComponent, BuscarComboComponent, ListaCategoriaComponent, MenuEstadisticaComponent, ClienteEstadisticaComponent, ComboEstadisticaComponent],
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
        MatGridListModule,
        ChartsModule,
    ],
    providers: [AuthService,TokenInterceptorService,AuthGuard,AuthGuardLogin,APIservice,DialogService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ]
    
})
export class dawModel{

}