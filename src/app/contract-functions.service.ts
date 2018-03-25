import { Injectable } from '@angular/core';
import { Web3ConnectorService } from './web3-connector.service';
import { HttpClient } from '@angular/common/http'

import * as contract from "truffle-contract";
const auctionContract= require('../../build/contracts/SimpleAuction.json');


@Injectable()
export class ContractFunctionsService {
web3:any;
auctionInstance:any;
contracts: any[] = [];



bid(bidValue: number, sender: any, contract: any){
  console.log(contract);
  return this.auctionInstance.at(contract).then(inst => {
    return inst.bid({from: sender, value: bidValue})
  });
}

getHighestBidder(contract: any) {
  return this.auctionInstance.at(contract).then(inst => {
    return inst.highestBidder.call();
  })
}

getHighestBid(contract: any) {
  return this.auctionInstance.at(contract).then(inst => {
    return inst.highestBid.call();
  })
}

make(){
  var newContract;
  return newContract = this.auctionInstance.new(20000, this.web3.eth.coinbase, {from: this.web3.eth.coinbase, gas: 999999})
    .then(res => {
      this.contracts.push(res.address);
      return this.contracts;
    })
}

setContract() {
    this.auctionInstance = contract(auctionContract);
    this.auctionInstance.setProvider(this.web3.currentProvider);
    }


  constructor(public web3ConnectorService: Web3ConnectorService,
              public http: HttpClient) { 

  this.web3 = this.web3ConnectorService.web3;
  this.setContract();

}

}
