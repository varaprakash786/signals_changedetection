import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { from, map } from "rxjs";
import { RouterOutlet } from "@angular/router";

@Component({
    selector:'app-layout',
    imports:[NavbarComponent,RouterOutlet],
    templateUrl: './layout.component.html',
    styleUrl:'./layout.component.css'
})

export class LayoutComponent implements OnInit{

    ngOnInit(){
     
    }

}