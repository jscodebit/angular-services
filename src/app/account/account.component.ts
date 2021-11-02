import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  @Input() account= {name : 'sample', status: 'inactive'};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, status: string}>();

  onSetTo(newStatus: string){
    this.statusChanged.emit({id: this.id, status: newStatus})
  }
}
