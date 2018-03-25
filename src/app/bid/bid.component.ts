import { Component, OnInit } from '@angular/core';
import { ContractFunctionsService } from '../contract-functions.service';
import { Web3FunctionsService } from '../web3-functions.service';
import {MatSliderModule} from '@angular/material/slider';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  value: number = 50;
  highestBidder: any;
  highestBid: number;
  accounts;
  account;

  contracts;

  contract ;

  bid() {
    this.contractFunctionsService.bid(this.value, this.account, this.contract).then(res => { if(res) this.openSnackBar("Bidding Succesful", "exit") }, err => { if(err) this.openSnackBar("Error occured", "exit") } )
  }

  makeSC() {
    this.contractFunctionsService.make().then(res => {this.contracts = res;})
  }

  get(){
    this.getHighestBidder();
    this.getHighestBid();
  }

  getHighestBidder(){
    this.contractFunctionsService.getHighestBidder(this.contract).then(res => {this.highestBidder = res})
  }

  getHighestBid(){
    this.contractFunctionsService.getHighestBid(this.contract).then(res => {this.highestBid = res})
  }
  
  getContract(){
   this.contract = this.route.snapshot.paramMap.get('contract');
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  constructor(public contractFunctionsService: ContractFunctionsService,
              public web3FunctionsService: Web3FunctionsService,
              public route: ActivatedRoute,
              public location: Location,
              public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.accounts = this.web3FunctionsService.getAccounts();
    console.log(this.accounts);
    this.getContract()    
  }
}
