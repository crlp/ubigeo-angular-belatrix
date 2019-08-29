import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-distrito',
  templateUrl: './distrito.component.html',
  styleUrls: ['../app.component.css']
})
export class DistritoComponent implements OnInit {

  @Input()
  distritos = []

  constructor() { }

  ngOnInit() {
  }

}
