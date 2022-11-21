import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Cubo } from 'src/app/models/Cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-realizacompra',
  templateUrl: './realizacompra.component.html',
  styleUrls: ['./realizacompra.component.css']
})
export class RealizacompraComponent implements OnInit {

  public cubos!: Array<Cubo>
  @ViewChild("selectcubo") selectcubo!: ElementRef
  
  constructor(private _serviceU: UsuarioService, private _serviceC: CuboService, private _router: Router ) { }

  ngOnInit(): void {

    this._serviceC.getCubos().subscribe(res => {
      this.cubos = res
    })

  }

  realizaCompra(): void {
    console.log(this.selectcubo.nativeElement.value)
    this._serviceU.realizaCompra(parseInt(this.selectcubo.nativeElement.value)).subscribe(res=>{
      this._router.navigate(['/comprasusuario'])
    })
  }

}
