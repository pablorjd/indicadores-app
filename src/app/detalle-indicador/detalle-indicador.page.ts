import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-indicador',
  templateUrl: './detalle-indicador.page.html',
  styleUrls: ['./detalle-indicador.page.scss'],
})
export class DetalleIndicadorPage implements OnInit {

  public isEnabled: boolean = false;

  constructor() { }

  ngOnInit() {

    console.log(this.isEnabled);

  }

  activatedCalendar(): void {
    console.log("Call the method");

    if (!this.isEnabled) {
      this.isEnabled = true;
      return
    }
    this.isEnabled = false;
    console.log("Call the method",this.isEnabled);
  }

}
