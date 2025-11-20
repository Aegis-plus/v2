import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div class="bg-ctp-base min-h-screen text-ctp-text font-sans">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-contact></app-contact>
      </main>
      <footer class="bg-ctp-mantle py-8 border-t border-ctp-surface0 text-center">
        <p class="text-ctp-subtext0 text-sm">
          © 2025 Raditya Candra. Built with Angular & Catppuccin.
        </p>
      </footer>
    </div>
  `
})
export class AppComponent {}