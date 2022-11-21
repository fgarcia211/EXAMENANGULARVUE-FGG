import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zonalogin',
  templateUrl: './zonalogin.component.html',
  styleUrls: ['./zonalogin.component.css']
})

export class ZonaloginComponent implements OnInit {

  @ViewChild("cajaemail") cajaemail!: ElementRef;
  @ViewChild("cajapass") cajapass!: ElementRef;

  constructor(private _service: UsuarioService, private _router: Router) { }

  ngOnInit(): void {
  }

  iniciaSesion(): void{
    var email = this.cajaemail.nativeElement.value
    var pass = this.cajapass.nativeElement.value
    
    this._service.loginUsuario(email,pass).subscribe(res => {
      environment.token = res.response
      localStorage.setItem("token",res.response);
      this._router.navigate(['/'])
    })
  }

}
