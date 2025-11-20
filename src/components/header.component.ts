import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-ctp-base/80 border-b border-ctp-surface0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 cursor-pointer" (click)="scrollTo('home')">
            <span class="font-bold text-xl tracking-tight text-ctp-mauve font-mono">&lt;GamerDev /&gt;</span>
          </div>
          
          <!-- Desktop Nav -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <button (click)="scrollTo('home')" class="text-ctp-subtext0 hover:text-ctp-mauve px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
              <button (click)="scrollTo('about')" class="text-ctp-subtext0 hover:text-ctp-mauve px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
              <button (click)="scrollTo('skills')" class="text-ctp-subtext0 hover:text-ctp-mauve px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</button>
              <button (click)="scrollTo('projects')" class="text-ctp-subtext0 hover:text-ctp-mauve px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</button>
              <button (click)="scrollTo('contact')" class="text-ctp-subtext0 hover:text-ctp-mauve px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
            </div>
          </div>

          <!-- Theme Toggle & Mobile Menu Button -->
          <div class="flex items-center gap-4">
            <button 
              (click)="themeService.toggleTheme()" 
              class="p-2 rounded-full bg-ctp-surface0 hover:bg-ctp-surface1 text-ctp-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-ctp-mauve"
              aria-label="Toggle Theme">
              @if (themeService.isDarkMode()) {
                <!-- Moon Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              } @else {
                <!-- Sun Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            </button>

            <!-- Mobile menu button -->
             <div class="-mr-2 flex md:hidden">
              <button (click)="toggleMobileMenu()" type="button" class="bg-ctp-surface0 inline-flex items-center justify-center p-2 rounded-md text-ctp-subtext0 hover:text-ctp-text hover:bg-ctp-surface1 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" [class.hidden]="isMobileMenuOpen" [class.block]="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="h-6 w-6" [class.hidden]="!isMobileMenuOpen" [class.block]="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMobileMenuOpen) {
        <div class="md:hidden bg-ctp-base border-t border-ctp-surface0" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button (click)="scrollTo('home'); toggleMobileMenu()" class="text-ctp-subtext0 hover:text-ctp-mauve block px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
            <button (click)="scrollTo('about'); toggleMobileMenu()" class="text-ctp-subtext0 hover:text-ctp-mauve block px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
            <button (click)="scrollTo('skills'); toggleMobileMenu()" class="text-ctp-subtext0 hover:text-ctp-mauve block px-3 py-2 rounded-md text-base font-medium w-full text-left">Skills</button>
            <button (click)="scrollTo('projects'); toggleMobileMenu()" class="text-ctp-subtext0 hover:text-ctp-mauve block px-3 py-2 rounded-md text-base font-medium w-full text-left">Projects</button>
            <button (click)="scrollTo('contact'); toggleMobileMenu()" class="text-ctp-subtext0 hover:text-ctp-mauve block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}