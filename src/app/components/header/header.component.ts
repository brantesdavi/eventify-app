import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  isHomeRoute: boolean | undefined;

  constructor(private router: Router, private location: Location){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Verifica se o caminho atual é a rota home
      this.isHomeRoute = this.router.url === '/';
    });
  }

  voltar(): void {
    this.location.back();
  }


}
