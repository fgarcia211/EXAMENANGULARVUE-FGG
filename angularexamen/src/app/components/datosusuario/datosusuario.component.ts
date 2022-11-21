import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-datosusuario',
  templateUrl: './datosusuario.component.html',
  styleUrls: ['./datosusuario.component.css']
})
export class DatosusuarioComponent implements OnInit {

  public usuario!: Usuario;

  constructor(private _service: UsuarioService) { }

  ngOnInit(): void {
    this._service.infoUsuario().subscribe(res => {
      this.usuario = res;
    })
  }

}
