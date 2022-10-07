import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }
  @Input() todo: any
  @Output() onSave = new EventEmitter()
  @Output() onUpdate = new EventEmitter()
  ngOnInit(): void {
  }
  
}
