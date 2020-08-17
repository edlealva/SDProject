import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable, Injector } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from './../../../../tky/servicesTKY/loginUtils/auth.service';
import {Router} from '@angular/router';


@Component({
    selector     : 'lock',
    templateUrl  : './lock.component.html',
    styleUrls    : ['./lock.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
@Injectable()
export class LockComponent implements OnInit
{
    lockForm: FormGroup;
    nombre = "";
    loginUserData = {
        user: String,
        password: String
    
      }
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _auth: AuthService,
        private _router: Router 

    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.loginUserData.user = this._auth.getloginData().Usuario;
        this.nombre =  this._auth.getloginData().Nombre;
        this.lockForm = this._formBuilder.group({
            username: [
                {
                    value   : this.loginUserData.user ,
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });
    }

    reloguin(){
        this.loginUserData.password = this.lockForm.get("password").value;
        this._auth.loginUser( this.loginUserData).subscribe(
            res => {
                 console.log(res)
              if(res.Token!=null){
                 
                localStorage.setItem('login', JSON.stringify(res));
                
                this._router.navigate(['apps/dashboards/analytics']);
                  
              }
              
            },
            err => {
                
                if(err.status==401){
                 
                  console.log(err.error);
                }
                  
  
              
          }
          )
    }

    cambiarCuenta(){
        this._auth.logoutUser()
        this._router.navigate(['/pages/auth/login-2']);
    }
}
