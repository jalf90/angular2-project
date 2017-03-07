import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { MdIcon } from '@angular/material'

@Component({
	selector: 'navbar',
	templateUrl: 'app/navbar/navbar.component.html',
	styleUrls: ['assets/styles/navbar/navbar.component.css', 'assets/styles/main.css']
})

export class NavbarComponent {
	public hideMenu: boolean = true
	public hideSubmenu1: boolean[] = [true];

	public displayMenu = function(){
		this.hideMenu = !this.hideMenu
	}

	public displaySubmenu = function(number:number) {
		console.log(number)
		this.hideSubmenu1[number] = !this.hideSubmenu1[number]
	}
}