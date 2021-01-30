import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tablac',
  templateUrl: './pais-tablac.component.html',
  styleUrls: ['./pais-tablac.component.css']
})
export class PaisTablacComponent implements OnInit {

  constructor() { }
  @Input() paises: Pais[];
  @Input() MostrarTabla: boolean;
  ngOnInit(): void {
  }

}
