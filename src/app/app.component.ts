import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
              ],
})
export class AppComponent {
  // @ViewChild(SettingsLauncherDirective)
  // settingsLauncher!: SettingsLauncherDirective;

  // ngAfterViewInit(): void {
  //   this.settingsLauncher.launchSettingsOverlay(true);
  // }

  hidden = false
  toggleHidden() {
    this.hidden = !this.hidden;
  }
  showDiv = {
    previous : false,
    current : false,
    next : false
  }
}
