import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-insercion-afiliado',
  templateUrl: './insercion-afiliado.component.html',
  styleUrls: ['./insercion-afiliado.component.css']
})
export class InsercionAfiliadoComponent implements OnInit {
  dato={
    "codigo_entidad": "NIT-6096768010",
    "data": [
      {
        "tipo_documento": "CI",
        "numero_documento": "1705057",
        "fecha_nacimiento": "15/03/1958",
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
