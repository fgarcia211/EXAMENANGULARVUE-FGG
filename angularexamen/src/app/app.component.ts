import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularexamen';

  ngOnInit(): void {

    console.log(localStorage.getItem("token"))
    /* environment.token = localStorage.getItem("token"); */

  }
}
