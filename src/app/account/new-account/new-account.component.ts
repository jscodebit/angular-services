import { Component } from "@angular/core";
import { AccountService } from "src/app/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})

export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string; status: string}>();

  constructor(private accountService: AccountService){
    this.accountService.updateStatusLog.subscribe((status: string)=> {
      alert('New Status : '+ status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountService.addAccount(accountName, accountStatus);
  }
}
