import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "@/components/loader/loader.component";
import { ToggleThemeComponent } from "@/components/toggle-theme/toggle-theme.component"
import { ToggleThemeService } from "@/services/toggle-theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent, ToggleThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private toggleThemeService: ToggleThemeService) {
    this.toggleThemeService.loadThemeDefault();
  }

}
