import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/Cubo';
import { Comentario } from 'src/app/models/Comentario';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css']
})

export class DetallescuboComponent implements OnInit {

  public cubo!: Cubo;
  public comentarios!: Array<Comentario>;

  constructor(private _service: CuboService, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activeRoute.params.subscribe((params: Params)=>{

      if(params['id'] != null){

        this._service.getDetallesCubo(parseInt(params['id'])).subscribe(res => {

          this.cubo = res
          
          this._service.getComentariosCubo(this.cubo.idCubo).subscribe(res => {

            if (res.length > 0){
              this.comentarios = res
            }
            
            
          })

        })

      }

    })
  }

}
