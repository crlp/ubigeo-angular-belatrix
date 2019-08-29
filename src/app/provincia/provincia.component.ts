import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['../app.component.css']
})
export class ProvinciaComponent implements OnInit {

  @Input()
  provincias = []

  constructor() { }

  ngOnInit() {
  }

}
