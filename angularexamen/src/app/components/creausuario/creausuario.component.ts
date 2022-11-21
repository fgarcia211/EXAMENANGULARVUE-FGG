import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-creausuario',
  templateUrl: './creausuario.component.html',
  styleUrls: ['./creausuario.component.css']
})
export class CreausuarioComponent implements OnInit {

  constructor(private _service: UsuarioService, private _router: Router) { }

  @ViewChild('cajaemail') cajaemail!: ElementRef
  @ViewChild('cajanombre') cajanombre!: ElementRef
  @ViewChild('cajapass') cajapass!: ElementRef
  @ViewChild('cajapass2') cajapass2!: ElementRef

  ngOnInit(): void {
  }

  insertaUsuario(): void {

    if (this.cajapass.nativeElement.value == this.cajapass2.nativeElement.value) {
      var user = new Usuario(
        0,
        this.cajanombre.nativeElement.value,
        this.cajaemail.nativeElement.value,
        this.cajapass.nativeElement.value
      )

      this._service.insertaUsuario(user).subscribe(res => {
        this._router.navigate(["/login"])
      })
      
    }else{
      alert("Las contraseñas no son iguales")
    }

  }

}
