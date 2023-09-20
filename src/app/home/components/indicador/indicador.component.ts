import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss'],
})
export class IndicadorComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  goToDeatil() {
    this.router.navigate(['/detalle-indicador']);
  }

}
