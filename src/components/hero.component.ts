import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <!-- Background decorative blobs -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-ctp-mauve/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-ctp-blue/20 rounded-full blur-3xl -z-10 animate-pulse" style="animation-delay: 2s;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <!-- Text Content -->
        <div class="flex-1 text-center md:text-left">
          <p class="text-ctp-mauve font-mono text-lg mb-2">Hello, World! I'm</p>
          <h1 class="text-4xl md:text-6xl font-bold text-ctp-text mb-4 tracking-tight">
            Raditya <span class="text-ctp-blue">Candra</span>
          </h1>
          <div class="h-16 md:h-20">
             <p class="text-xl md:text-2xl text-ctp-subtext1 font-mono">
               {{ currentText() }}<span class="animate-blink">|</span>
             </p>
          </div>
          <p class="mt-6 text-ctp-subtext0 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Transitioning from server admin to fullstack creator. 
            I build applications with a focus on AI-driven experiences and modern web technologies.
          </p>
          
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button (click)="scrollToProjects()" class="px-8 py-3 rounded-lg bg-ctp-mauve text-ctp-base font-bold hover:bg-ctp-mauve/90 transition-transform hover:-translate-y-1 shadow-lg shadow-ctp-mauve/20">
              View My Work
            </button>
            <a href="https://github.com/Aegis-plus/" target="_blank" class="px-8 py-3 rounded-lg border border-ctp-surface1 text-ctp-text hover:bg-ctp-surface0 transition-colors flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Avatar/Visual -->
        <div class="flex-1 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80">
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-ctp-mauve to-ctp-blue animate-spin-slow blur-sm opacity-70"></div>
            <div class="absolute inset-1 rounded-full bg-ctp-base p-2">
               <img 
                 ngSrc="https://picsum.photos/400/400" 
                 width="400" 
                 height="400" 
                 class="rounded-full object-cover w-full h-full border-4 border-ctp-surface1"
                 alt="Profile Avatar"
                 priority
                />
            </div>
            
            <!-- Floating Badge -->
            <div class="absolute -bottom-4 -right-4 bg-ctp-surface0 p-3 rounded-xl shadow-lg border border-ctp-surface1 flex items-center gap-2 animate-bounce-slow">
               <div class="w-3 h-3 bg-ctp-green rounded-full"></div>
               <span class="text-sm font-bold text-ctp-text">Level 25 Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 1s infinite;
    }
    .animate-spin-slow {
      animation: spin 8s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-bounce-slow {
      animation: bounce 3s infinite;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(-5%); }
      50% { transform: translateY(5%); }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  currentText = signal('');
  private phrases = [
    "Casual Gamer.",
    "Fullstack Dev in Training.",
    "Building AI Experiences.",
    "Server Admin."
  ];
  private loopNum = 0;
  private isDeleting = false;
  private txt = '';
  private typingSpeed = 100;
  private timer: any;

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  tick() {
    let i = this.loopNum % this.phrases.length;
    let fullTxt = this.phrases[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.currentText.set(this.txt);

    let delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = 2000; // Wait before deleting
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.timer = setTimeout(() => this.tick(), delta);
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}