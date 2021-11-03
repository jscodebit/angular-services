import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  @Input() account= {name : 'sample', status: 'inactive'};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, status: string}>();

  constructor(private accountService: AccountService){}

  onSetTo(newStatus: string){
    this.accountService.updatedStatus(this.id, newStatus)
    // this.statusChanged.emit({id: this.id, status: newStatus})
    this.accountService.updateStatusLog.emit(newStatus);
  }
}
