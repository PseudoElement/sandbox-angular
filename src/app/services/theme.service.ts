import { Injectable } from "@angular/core";

enum Themes {
     DARK = "DARK",
     LIGHT = "LIGHT",
}

@Injectable({
     providedIn: "root",
})
export class ThemeService {
     public isDarkMode: boolean = false;
     constructor() {}
     public changeTheme() {
          this.isDarkMode = !this.isDarkMode;
     }
}
