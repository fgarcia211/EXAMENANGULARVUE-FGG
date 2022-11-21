import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-detallescompra',
  templateUrl: './detallescompra.component.html',
  styleUrls: ['./detallescompra.component.css']
})
export class DetallescompraComponent implements OnInit {

  public compras!: Array<Compra>

  constructor(private _service: UsuarioService) { }

  ngOnInit(): void {
    this._service.infoCompras().subscribe(res => {
      this.compras = res
    })
  }

}
