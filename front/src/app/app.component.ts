import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginModule } from 'app/main/pages/authentication/login/login.module';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import {AuthService} from './tky/servicesTKY/loginUtils/auth.service'
import { navigation } from 'app/navigation/navigation';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationTurkish } from 'app/navigation/i18n/tr';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    fuseConfig: any;
    // navigation: any;
    navigation:any;
    // =  [
         
    //     {
    //         id      : 'admin1',
    //         title   : 'Inicio',
    //         type    : 'collapsable',
    //         icon    : 'dashboard',
    //         children: []
    //     },
        
        
    //     {
    //     id      : 'admin',
    //     title   : 'Consultas',
    //     type    : 'collapsable',
    //     icon    : 'dashboard',
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
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseSidebarService: FuseSidebarService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform,
        private _auth: AuthService
    )
    {
        // Get default navigation
        // this.navigation = navigation;

        // // Register the navigation to the service
        // this._fuseNavigationService.register('main', this.navigation);

        // // Set the main navigation as our current navigation
        // this._fuseNavigationService.setCurrentNavigation('main');
       
      
        this.loadPanel()

        // Add languages
        this._translateService.addLangs(['en', 'tr']);

        // Set the default language
        this._translateService.setDefaultLang('en');

        // Set the navigation translations
        this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationTurkish);

        // Use a language
        this._translateService.use('en');

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix Start
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         * If you are using a language other than the default one, i.e. Turkish in this case,
         * you may encounter an issue where some of the components are not actually being
         * translated when your app first initialized.
         *
         * This is related to ngxTranslate module and below there is a temporary fix while we
         * are moving the multi language implementation over to the Angular's core language
         * service.
         **/

        // Set the default language to 'en' and then back to 'tr'.
        // '.use' cannot be used here as ngxTranslate won't switch to a language that's already
        // been selected and there is no way to force it, so we overcome the issue by switching
        // the default language back and forth.
        /**
         setTimeout(() => {
            this._translateService.setDefaultLang('en');
            this._translateService.setDefaultLang('tr');
         });
         */

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix End
         * ----------------------------------------------------------------------------------------------------
         */

        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                this.fuseConfig = config;

                // Boxed
                if ( this.fuseConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }

                // Color theme - Use normal for loop for IE11 compatibility
                for ( let i = 0; i < this.document.body.classList.length; i++ )
                {
                    const className = this.document.body.classList[i];

                    if ( className.startsWith('theme-') )
                    {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.fuseConfig.colorTheme);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void
    {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    loadPanel(){
        let child :any  = [];
        let childconsultas: any =[];
        if(this._auth.getloginData()==null){
            this._fuseNavigationService.register('permisos', this.navigation);
            this._fuseNavigationService.setCurrentNavigation('permisos');
        }
        else{
            this.navigation =  [
         
                    {
                        id      : 'admin1',
                        title   : 'Categorias',
                        type    : 'collapsable',
                        icon    : 'dashboard',
                        children: [
                            {
                                id: 'crearcategoria',
                                title: 'Actualizaciones de categorias',
                                type: 'item',
                                url: '/daw/crearcategoria'
                            },
                            {
                                id: 'actualizarcategoria',
                                title: 'Buscador de categorias',
                                type: 'item',
                                url: '/daw/actualizarcategoria'
                            },
                            {
                                id: 'listacategoria',
                                title: 'Lista de categorias',
                                type: 'item',
                                url: '/daw/listacategoria'
                            }

                        ]
                    },
                    
                    
                    {
                    id      : 'admin',
                    title   : 'Combos',
                    type    : 'collapsable',
                    icon    : 'dashboard',
                    children: [
                         {
                             id   : 'combos',
                             title: 'Actualizaciones de combos',
                             type : 'item',
                          
                             url  : '/daw/combos'
                         },
                        {
                            id   : 'combos1',
                            title: 'Buscador de combos',
                            type : 'item',
                           
                            url  : '/daw/buscarcombos'
                        }
                    ]
                },
                {
                    id      : 'admin3',
                    title   : 'Estadisticas',
                    type    : 'collapsable',
                    icon    : 'dashboard',
                    children: [
                         {
                             id   : 'estcombos',
                             title: 'Estadisticas de clientes',
                             type : 'item',
                          
                             url  : '/daw/estadisticacliente'
                         },
                        {
                            id   : 'estcombo1',
                            title: 'Estadistica de combos',
                            type : 'item',
                           
                            url  : '/daw/estadisticacombo'
                        }
                    ] 
                }
            
            
            ]
        // for(let i of this._auth.getloginData().Permisos){
        //   console.log(i);
        //   var regconsulta = /Consultar/gi; 
        //   var regMasiva= /Masiva/gi;
        //   var regHome = /Home/gi; 
        //   let h ={
        //     id   : i,
        //     title: i,
        //     type : 'item',
        //     url  : 'tky/'+i.replace(/\s/g, "")
        // } 
        //   var str = i;
        //     if (str.search(regconsulta) == -1 ) { 
        //     console.log("No Contiene consultas" ); 
        //         if(str.search(regMasiva)== -1){
        //             console.log("No contiene la palabra misiva");
        //             if(str.search(regHome)== -1) {
        //                 child.push(h);
        //             }
                    
        //          }
            
        //     } else { 
        //         console.log("Contiene consultas" ); 
        //         childconsultas.push(h);
        //     } 
        
        // }
         
        
        // console.log(child)
        // this.navigation[0].children=child;
        // this.navigation[1].children = childconsultas;
        // console.log(this.navigation)
        this._fuseNavigationService.register('permisos', this.navigation);
        this._fuseNavigationService.setCurrentNavigation('permisos');
    }
    }
}
