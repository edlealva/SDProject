import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  private _isLog=false;
  private _urlAPI = "http://127.0.0.1:8000/apidb/rest-auth";
  // private _urltoken = "http://3.220.15.131:8080/tkycurier/user";

  constructor(private http: HttpClient, private router: Router ) {
   

  }
  isLog(){
    return this._isLog;
  }
   loginUser(user:any){
    localStorage.removeItem('login');
    this._isLog=true;
    return this.http.post<any>(this._urlAPI+'/login/',user)
  }

  logoutUser(){
  localStorage.removeItem('login');
  this.router.navigate(['']);
   
  }

  getloginData(){
    if(this.loggedIn()){
      return JSON.parse(localStorage.getItem('login'));
    }
    return null;
  }
  getToken() {
    let data = this.getloginData();
    if(data!=null)
      return data.key;
    else return '';
  }

  // checkToken(perm:string){
  //     if(this.loggedIn()){
  //       this.http.post<any>(this._urlAPI+'/checktoken',{permiso:perm}).subscribe(res =>{
           
  //       },
  //       err=>{
  //         console.log(err.error);
  //         this.router.navigate(['/pages/auth/lock']);
  //       }
  //       );
  //     }

  // }

  loggedIn() {
    return !!localStorage.getItem('login');    
  }


}