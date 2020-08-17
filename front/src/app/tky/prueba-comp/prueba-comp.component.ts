import { Component, OnInit } from '@angular/core';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import {AuthService} from './../servicesTKY/loginUtils/auth.service'

@Component({
  selector: 'app-prueba-comp',
  templateUrl: './prueba-comp.component.html',
  styleUrls: ['./prueba-comp.component.scss']
})
export class PruebaCompComponent implements OnInit {
//   navigation=[{
//     id      : 'admin',
//     title   : 'Prueba',
//     type    : 'group',
//     icon    : 'apps',
//     children: [
//         // {
//         //     id   : 'users',
//         //     title: 'Users',
//         //     type : 'item',
//         //     icon : 'person',
//         //     url  : '/apps/dashboards/analytics'
//         // },
//         // {
//         //     id   : 'payments',
//         //     title: 'Payments',
//         //     type : 'item',
//         //     icon : 'attach_money',
//         //     url  : '/apps/academy'
//         // }
//     ]
// }]
  constructor( private _fuseConfigService: FuseNavigationService,private _auth: AuthService) { }

  ngOnInit() {
    // this.navigation = this._auth.getloginData().Permisos;
    // this.navigation=
   

}
}