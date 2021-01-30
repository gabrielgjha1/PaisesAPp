import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public termino:string="";
  errores:boolean = false;
  paises:Pais[] =[]
  paisesSugeridos:Pais[] =[]
  MostrarTabla:boolean=true;
  mostrarSugeridos:boolean=false;
;  constructor(private _PaisServices:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.termino = termino;
    console.log(this.termino);
    this._PaisServices.buscarPais(this.termino).subscribe((resp:Pais[])=>{

      console.log(resp);
      this.paises = resp;
      this.MostrarTabla = true;
      this.mostrarSugeridos=false;
    },(err)=>{
      console.log('goasd');
      this.mostrarSugeridos=false;
      this.MostrarTabla = false;
    });
  }

  onDebounce(event:any){
    this.MostrarTabla = true;
    this.termino = event;
    console.log('hola');
    this._PaisServices.buscarPais(event).subscribe(resp=>{
      this.mostrarSugeridos=true;
        return this.paisesSugeridos = resp.splice(0,3);

    },(err)=>{
      this.MostrarTabla = false;
      this.mostrarSugeridos=false;
      this.paisesSugeridos = [];
    });


  }


  buscarSugerido(termino:string){


    this.buscar(termino);


  }

}
