import { Component, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JewelleryListComponent } from './jewellery-list/jewellery-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, JewelleryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jewellery';



  // isLoading: boolean = false
  // router = inject(Router)

  // ngOnInit(): void {
  //   this.router.events.subscribe({
  //     next: (event: any) => {
  //       if (event instanceof NavigationStart)
  //         this.isLoading = true
  //       if (event instanceof NavigationEnd) {
  //         this.isLoading = false
  //       }
  //     }
  //   })
  // }
}
