import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private _PaisService:PaisService) { }

  public id:string="";

  // !Significa que puede ser nulo
  public pais!:Pais;
  public MostrarTabla:boolean=false;
  ngOnInit(): void {

    this.activatedRoute.params

    .pipe(
      switchMap(  ({id})=>this._PaisService.buscarUnPais(id)  ),
      tap()
      )
    .subscribe( id=>{

      console.log(id);
      this.pais = id;
    });


  }




}
