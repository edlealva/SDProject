import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from '../../../../tky/servicesTKY/loginUtils/auth.service';
import { Router } from '@angular/router';
@Component({
    selector     : 'login-2',
    templateUrl  : './login-2.component.html',
    styleUrls    : ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Login2Component implements OnInit
{
    loginForm: FormGroup;
    
    loginUserData = {
        username: String,
        email: String,
        password: String
    
      };
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder, private _auth: AuthService,
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
        this.loginForm = this._formBuilder.group({
            username   : ['', [Validators.required]],
            email : ['', [Validators.required]],
            password: ['', Validators.required],

        });
    }

    

    loginUser(): void {
        
        if (this.loginForm.status == 'VALID'){
            console.log(this.loginForm.get('username').value);
            console.log(this.loginForm.get('password').value);
            
            this.loginUserData.username = this.loginForm.get('username').value;
            this.loginUserData.email = this.loginForm.get('email').value;
            this.loginUserData.password = this.loginForm.get('password').value;
            console.log(this.loginUserData);
            this._auth.loginUser(this.loginUserData)
        .subscribe(
          res => {
               console.log(res);
               if (res.key != null){
                console.log(res.status);
                localStorage.setItem('login', JSON.stringify(res));
                this._router.navigate(['daw/actualizarcategoria']);
            
            }
            else { console.log('error de autenticacion'); }
            
          },
          err => {console.log(err);
                  console.log('hola');
        }
        ); 
        }
        else { console.log('mal'); }
      }

      


}
