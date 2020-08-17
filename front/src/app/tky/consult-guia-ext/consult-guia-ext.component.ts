import { APIservice } from './../servicesTKY/services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormTramaco } from './modal_mapeo_tramaco/dialog_form_tramaco'
import { DialogFormLaar } from './modal_mapeo_laar/dialog_form_laar'

export interface dataGuias {
  guia_externa: string,
  estado: string,
  Nombre_Destinatario: string,
  Identificacion: string,
  id_guia: number,
  // id_destinatario: number,
  mapeo: string
}


@Component({
  selector: 'app-consult-guia-ext',
  templateUrl: './consult-guia-ext.component.html',
  styleUrls: ['./consult-guia-ext.component.scss']
})
export class ConsultGuiaExtComponent implements OnInit {
  displayedColumns: string[] = ['Identificacion', 'Nombre_Destinatario', 'id_guia', 'guia_externa', 'estado', 'mapeo', "Actions"];
  dataSource: MatTableDataSource<dataGuias>;

  @ViewChild(MatPaginator, { static: false }) paginatorI: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sortI: MatSort;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  searchKey ="";
  guias: any = []
  bodyRequest: any = {
    guiaExt: "",
    estado: "A",
    pageSize: "10",
    pageIndex: "1"
  }

  constructor(private _service: APIservice, public dialog: MatDialog) {

  }

  ngAfterViewInit() {
    // this.sortI.sortChange.subscribe(() => this.paginatorI.pageIndex = 0);
    this.loadData();
  }
  ngOnInit() {

  }

  parsedata(guia: any): dataGuias {
    return {
      guia_externa: guia.guia_externa,
      estado: guia.estado,
      Nombre_Destinatario: guia.Nombre_Destinatario,
      Identificacion: guia.Identificacion,
      id_guia: guia.id_guia,
      // id_destinatario: guia.id_destinatario,
      mapeo: guia.mapeo

    }
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  loadData(){
    merge( this.paginatorI.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          console.log((this.paginatorI.pageIndex + 1).toString())
          this.bodyRequest.pageIndex = (this.paginatorI.pageIndex + 1).toString()
          this.bodyRequest.guiaExt = this.searchKey;
          return this._service.getGuiasExternas(
            this.bodyRequest
          )
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = Number(data.headers.get("totalResultados"));
          console.log(data)
          return data.body.guia_externa;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.dataSource = new MatTableDataSource(Array.from(data, x => this.parsedata(x)))
        // this.dataSource.sort = this.sortI;
      }
      );

  }

  onSearchClear(){
    
    this.loadData();
  }
  openDialogTramaco(guia: any): void {
    console.log(guia)
    const dialogRef = this.dialog.open(DialogFormTramaco, {
      width: '1000px',
      data: { guiatramaco: guia }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      // this.animal = result;
    });
  }

  openDialogLaar(guia: any): void {
    console.log(guia)
    const dialogRef = this.dialog.open(DialogFormLaar, {
      width: '1000px',
      data: { guiaLaar: guia }
    });

    dialogRef.afterClosed().subscribe(result => {

      // this.animal = result;
      console.log(result)
    });
  }



}


