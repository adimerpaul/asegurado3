import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-titular',
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.css']
})
export class TitularComponent implements OnInit {
  dato={
    data:[
      {
        "tipo_documento": "CI",
        "numero_documento": "6756826",
        "fecha_nacimiento": "12/03/1987",
        "tipo_asegurado": "TRABAJADOR"
      }
    ]
  };
  tiposasegurados:string[]=['TRABAJADOR', 'RENTISTA', 'VOLUNTARIO', 'CONVENIO'];

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }
datos: any;
  validacion() {
    this.auth.validacionafiliado(this.dato).subscribe(e=>{
      this.datos=e[0];
      console.log(this.datos);
    });
  }
}
