import { Component } from '@angular/core';
import { ToggleThemeService } from "@/services/toggle-theme.service";

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss'
})
export class ToggleThemeComponent {
  isDarkMode = false;

  constructor(private toggleThemeService: ToggleThemeService) {
    this.isDarkMode = this.toggleThemeService.getTheme() === 'dark';
  }

  toggleMode() {
    this.toggleThemeService.toggleTheme();
  }
}
