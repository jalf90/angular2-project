import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MaterialModule } from '@angular/material'
import { BrowserModule } from "@angular/platform-browser"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AboutComponent } from './about/about.component'
import { NavbarComponent } from './navbar/navbar.component'
import { LoginComponent } from './login/login'

const routerConfig: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginComponent }
]

@Component({
	selector: 'my-app',
	template: `
		<navbar></navbar>
		<router-outlet></router-outlet>
 	`,
	styleUrls: ['assets/styles/main.css']
})

class AppComponent { }

@NgModule({
	declarations: [AppComponent, NavbarComponent, AboutComponent, LoginComponent],
	imports: [BrowserModule, RouterModule.forRoot(routerConfig), MaterialModule.forRoot()],
	bootstrap: [AppComponent]
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)