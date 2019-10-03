import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";
import { Router } from "@angular/router";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./item.css"]
})
export class ItemsComponent implements OnInit {
    constructor(private itemService: ItemService, private router: Router) { }
    ngOnInit(): void {
    }

}
