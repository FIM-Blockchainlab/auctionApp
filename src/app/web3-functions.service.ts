import { Injectable } from '@angular/core';
import { Web3ConnectorService } from './web3-connector.service';

@Injectable()
export class Web3FunctionsService {
web3:any;

getAccounts() {
  return(this.web3.eth.accounts)
}


  constructor(public web3ConnectorService: Web3ConnectorService) {
    this.web3 = this.web3ConnectorService.web3;
    }

}
