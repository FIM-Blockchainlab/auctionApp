import { Component, OnInit } from '@angular/core';
import { ContractFunctionsService } from '../contract-functions.service';
import { Web3FunctionsService } from '../web3-functions.service';
import {MatSliderModule} from '@angular/material/slider';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'create-home',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  account;
  accounts;

  contracts;

  contract;
  name;
  animal;


  makeSC() {
    this.contract = null;
    this.contractFunctionsService.make().then(res => {return this.contracts = res;}).then(res => {
      console.log(this.contract = res[(res.length-1)])
      this.openDialog();
    })
  }


  constructor(public contractFunctionsService: ContractFunctionsService,
              public web3FunctionsService: Web3FunctionsService,
              public route: ActivatedRoute,
              public location: Location,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.accounts = this.web3FunctionsService.getAccounts();
    console.log(this.accounts); 
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateDialog, {
      
      data: { contract: this.contract }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

  @Component({
    selector: 'create-dialog',
    templateUrl: './create-dialog.html',
    styleUrls: ['./create-dialog.css']
  })
  export class CreateDialog {
  
    constructor(
      public dialogRef: MatDialogRef<CreateDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public snackBar: MatSnackBar
      ) { }
  
    closeDialog(): void {
      this.dialogRef.close();
    }

    openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}




