import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['../app.component.css']
})
export class DepartamentoComponent implements OnInit {

  @Input()
  departamentos = []
  
  constructor() { }

  ngOnInit() {
  }

}
