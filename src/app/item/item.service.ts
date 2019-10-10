import { Injectable } from "@angular/core";
import { Item } from "./item";
// import client from "~/app/lib/fusionAuthClientInstance";
// import {IdentityProviderLoginRequest, LoginRequest} from "@fusionauth/typescript-client";


@Injectable({
    providedIn: "root"
})
export class ItemService {
    // login = 'ismaelteste';
    // password = '123456789';
    // private client = new DefaultRESTClientBuilder().build('http://192.168.217.250:9011');;

    constructor() {
        // console.info(this.clientTeste());
    }

  //   request : LoginRequest = {
  //       "loginId": this.login,
  //       "password": this.password,
  //       "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
  //   };
  //
  //   loginRequest(){
  //     return client.login(this.request);
  //   }
  //
  //   clientTeste() {
  //       return this.loginRequest()
  //         .then(this.handleResponse, this.handleErrorResponse);
  //     }
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
