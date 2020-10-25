import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
//import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor( private auth:AuthService,
    private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    if( localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login(form: NgForm){
    if(form.valid)
      this.auth.login(this.usuario).subscribe(res => {
        console.log(res);
        if(this.recordarme){
          localStorage.setItem('email', this.usuario.email);
        }
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);
      });
  } 
  

}
