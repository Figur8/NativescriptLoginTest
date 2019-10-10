import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";
import { Router } from "@angular/router";
// import client from "~/app/lib/fusionAuthClientInstance";
// import {LoginRequest} from "@fusionauth/typescript-client";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./item.css"]
})
export class ItemsComponent implements OnInit {
    // login = 'ismaelteste';
    // password = '123456789';
    // // private client = new DefaultRESTClientBuilder().build('http://192.168.217.250:9011');;
    // request : LoginRequest = {
    //     "loginId": this.login,
    //     "password": this.password,
    //     "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
    // };

    constructor(private router: Router) {
        // this.explanationPromise();
        // console.info(this.clientLogin());
    }

    ngOnInit(): void {

    }
  //
  //   explanationPromise() {
  //       new Promise<number>((resolve) => {resolve(5)})
  //           .then((num) => num *2)
  //           .then((result) => 10/result)
  //           .then((newVal) => newVal+5, err => 10)
  //           .then(fim => console.log("fim: ",fim));
  //   }
  //
  //   clientLogin() {
  //       return client.login(this.request)
  //         .then(this.handleResponse, this.handleErrorResponse);
  //   }
  //
  //
  // public handleResponse(clientResponse) {
  //   console.info(JSON.stringify(clientResponse, null, 2));
  // }
  //
  // public handleErrorResponse(clientResponse) {
  //   console.error(JSON.stringify(clientResponse, null, 2));
  // }

}
