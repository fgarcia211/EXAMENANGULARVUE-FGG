import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/Cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-homecubos',
  templateUrl: './homecubos.component.html',
  styleUrls: ['./homecubos.component.css']
})
export class HomecubosComponent implements OnInit {

  public cubos!: Array<Cubo>

  constructor(private _activeRoute: ActivatedRoute, private _service: CuboService) { }
  
  ngOnInit(): void {

    this._activeRoute.params.subscribe((params: Params)=>{

      if (params['marca'] != null){

        this._service.getCubosMarca(params['marca']).subscribe(res => {
          this.cubos = res
        })

      }else{

        this._service.getCubos().subscribe(res => {
          this.cubos = res
        })
      }

      
    })
  }

}
