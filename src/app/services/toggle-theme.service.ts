import { Injectable } from "@angular/core";

type ThemeColor = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})

export class ToggleThemeService {

  private themeObj = {
    light: () => {
      localStorage.setItem('theme-color', 'light')
      document.querySelector('html')?.setAttribute('data-theme', 'light');
    },
    dark: () => {
      localStorage.setItem('theme-color', 'dark')
      document.querySelector('html')?.setAttribute('data-theme', 'dark');
    },
  }

  isColor(color: ThemeColor): boolean {
    return color === 'light' || color === 'dark';
  }

  getTheme(): ThemeColor {
    return localStorage.getItem('theme-color') as ThemeColor;
  }

  toggleTheme() {
    const themeColor = this.getTheme() ?? 'light';
    const color = this.isColor(themeColor) ? themeColor : 'light';

    if (color === 'dark') {
      this.themeObj.light();
    } else {
      this.themeObj.dark();
    }
  }

  loadThemeDefault() {
    const themeColor = this.getTheme();
    const color = this.isColor(themeColor) ? themeColor : 'light';

    this.themeObj[color]();
  }

}
