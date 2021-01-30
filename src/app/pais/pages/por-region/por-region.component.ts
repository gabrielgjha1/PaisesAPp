import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
  regiones:string[]=['africa','americas','asia','europe','oceania']
  regionActiva:string = '';
  paises:Pais[]=[];
  MostrarTabla:boolean = false;
  constructor(private _PaisService:PaisService) { }

  ngOnInit(): void {
  }

  getclasesCSS(region:string):string{

    return (region===this.regionActiva) ? 'btn btn-info':'btn btn-outline-info'

  }

  activarRegion(region:string){
    this.regionActiva = region;

    this._PaisService.buscarUnaRegion(this.regionActiva).subscribe((resp:Pais[])=>{

      this.paises = resp;
      this.MostrarTabla=true;
    });

    //TODO hacer el llamado al servicio
  }





}
