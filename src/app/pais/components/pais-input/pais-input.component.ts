import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  termino:string ="";
  @Output() onEnter:EventEmitter <string>= new EventEmitter();
  @Output() onDebounce:EventEmitter <string>= new EventEmitter();
  @Input() nombre: string="";
  debouncer:Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {

    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=>{
      console.log(valor);

     this.onDebounce.emit(valor);

    });

  }
  teclaPresionada(event:any){

    this.debouncer.next(this.termino);

    // const valor = event.target.value;
    // console.log(valor);

  }
  buscar(){
    this.onEnter.emit(this.termino);
  }

}
