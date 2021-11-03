import { Component } from "@angular/core";
import { AccountService } from "src/app/account.service";
import { LoggingService } from "src/app/logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})

export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string; status: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
