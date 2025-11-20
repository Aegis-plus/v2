import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="py-20 bg-ctp-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-ctp-text mb-4">Tech Tree</h2>
          <p class="text-ctp-subtext0 max-w-2xl mx-auto">My arsenal of tools and technologies. Always grinding to unlock new skills.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Languages -->
          <div class="bg-ctp-surface0/50 p-6 rounded-xl border border-ctp-surface1 hover:border-ctp-mauve transition-colors">
            <h3 class="text-xl font-bold text-ctp-blue mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Languages
            </h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">JavaScript</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">TypeScript</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Python</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">HTML5</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">CSS3</span>
            </div>
          </div>

          <!-- Frameworks -->
          <div class="bg-ctp-surface0/50 p-6 rounded-xl border border-ctp-surface1 hover:border-ctp-mauve transition-colors">
            <h3 class="text-xl font-bold text-ctp-green mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Frameworks & Libs
            </h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">React</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Next.js</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Angular</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Express</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Tailwind</span>
            </div>
          </div>

          <!-- Tools -->
          <div class="bg-ctp-surface0/50 p-6 rounded-xl border border-ctp-surface1 hover:border-ctp-mauve transition-colors">
            <h3 class="text-xl font-bold text-ctp-peach mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Tools & Data
            </h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Git/GitHub</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">VS Code</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">PostgreSQL</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Vercel</span>
              <span class="px-3 py-1 bg-ctp-base rounded-md text-ctp-text border border-ctp-surface0 text-sm font-mono">Pandas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {}