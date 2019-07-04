import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AccountService } from "src/app/services/accounts.service";
import { AccountModel } from "src/app/models/account/account-model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  private account= new AccountModel();
  private accounts: AccountModel[];
  private subscription = new Subscription();

  constructor(private http: HttpClient,
    private accountService: AccountService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    this.account.billingDetails=[];
    this.account.addresses=[];
    this.account.name = (<HTMLInputElement>document.getElementById("signUpName")).value +(<HTMLInputElement>document.getElementById("signUpSurname")).value;
    this.account.userId = (<HTMLInputElement>document.getElementById("signUpEmail")).value;
    if((<HTMLInputElement>document.getElementById("homeAddress")).value.length!=0){
      this.account.addresses.push((<HTMLInputElement>document.getElementById("homeAddress")).value);
    }
    if((<HTMLInputElement>document.getElementById("workAddress")).value.length!=0){
      this.account.addresses.push((<HTMLInputElement>document.getElementById("workAddress")).value);
    }
    if((<HTMLInputElement>document.getElementById("creditCard")).value.length!=0){
      this.account.billingDetails.push((<HTMLInputElement>document.getElementById("creditCard")).value);
    }
    if((<HTMLInputElement>document.getElementById("debitCard")).value.length!=0){
      this.account.billingDetails.push( (<HTMLInputElement>document.getElementById("debitCard")).value);
    }
    this.accountService.createAccounts(this.account);
    this.getAllAccounts();
    for(let account of this.accounts){
      if(account.email === this.account.userId){
        this.accountService.setCurrentAccountId(account);
        // window.location.href="http://localhost:4200/home/";
      }
    }
    // window.location.href="localhost:4200/home";
  }
  getAllAccounts() {
    this.subscription.add(
      this.accountService.getAllAccounts().subscribe(res => {
        this.accounts = res;
        console.log(this.accounts);
      })
    );
  }
}
