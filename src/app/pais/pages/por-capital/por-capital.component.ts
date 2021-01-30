import { Component, OnInit } from '@angular/core';
import { capital } from '../../interfaces/capital.intefaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  public termino:string="";
  public capital:capital[]=[];
  public MostrarTabla=true;
  mostrarSugeridos:boolean=false;
  paisesSugeridos:capital[] =[]
  constructor(public _PaisService:PaisService) {

   }

  ngOnInit(): void {
  }

  buscar(termino:string) {

    this.termino = termino;
    console.log(this.termino);
    this._PaisService.buscarCatpital(this.termino).subscribe((resp:capital[])=>{

      console.log(resp);
      this.capital = resp;
      this.MostrarTabla = true;

    },(err)=>{
      console.log(err)
      this.MostrarTabla = false;
    });

  }

  onDebounce(event:any){
    this.MostrarTabla = true;
    this.termino = event;
    console.log('hola');
    this._PaisService.buscarCatpital(event).subscribe(resp=>{
      this.mostrarSugeridos=true;
        return this.paisesSugeridos = resp.splice(0,3);

    },(err)=>{
      this.MostrarTabla = false;
      this.paisesSugeridos = [];
    });

  }

}
