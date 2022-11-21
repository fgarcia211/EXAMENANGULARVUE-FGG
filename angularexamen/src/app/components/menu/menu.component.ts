import { Component, OnInit, DoCheck } from '@angular/core';
import { CuboService } from 'src/app/services/cubo.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public marcas!: Array<string>;
  public logeado: boolean = false;

  constructor(private _service: CuboService, private _router:Router) { }

  ngOnInit(): void {

    this._service.getMarcas().subscribe(res => {
      this.marcas = res;
      //Para iniciar sesion o registrar
      localStorage.clear();this._router.navigate(['/'])
    })
    
  }

  ngDoCheck(): void {

    if (localStorage.getItem("token") == null){
      this.logeado = false
    }else{
      this.logeado = true
    }

  }

}
