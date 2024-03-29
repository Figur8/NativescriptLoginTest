import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { testeComponent} from "./teste/teste.component"

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "teste", component: testeComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
