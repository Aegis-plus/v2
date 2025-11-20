import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-20 bg-ctp-mantle">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <!-- Stats/Card -->
          <div class="relative">
             <div class="absolute inset-0 bg-ctp-mauve rounded-2xl rotate-3 opacity-20"></div>
             <div class="relative bg-ctp-base p-8 rounded-2xl border border-ctp-surface0 shadow-xl">
               <h3 class="text-2xl font-bold text-ctp-text mb-6">Character Stats</h3>
               
               <div class="space-y-4">
                 <div>
                   <div class="flex justify-between mb-1">
                     <span class="text-sm font-medium text-ctp-subtext0">Frontend (React/Angular)</span>
                     <span class="text-sm font-medium text-ctp-blue">75%</span>
                   </div>
                   <div class="w-full bg-ctp-surface0 rounded-full h-2.5">
                     <div class="bg-ctp-blue h-2.5 rounded-full" style="width: 75%"></div>
                   </div>
                 </div>

                 <div>
                   <div class="flex justify-between mb-1">
                     <span class="text-sm font-medium text-ctp-subtext0">Server Management</span>
                     <span class="text-sm font-medium text-ctp-green">85%</span>
                   </div>
                   <div class="w-full bg-ctp-surface0 rounded-full h-2.5">
                     <div class="bg-ctp-green h-2.5 rounded-full" style="width: 85%"></div>
                   </div>
                 </div>

                 <div>
                   <div class="flex justify-between mb-1">
                     <span class="text-sm font-medium text-ctp-subtext0">AI Promping/Integration</span>
                     <span class="text-sm font-medium text-ctp-red">90%</span>
                   </div>
                   <div class="w-full bg-ctp-surface0 rounded-full h-2.5">
                     <div class="bg-ctp-red h-2.5 rounded-full" style="width: 90%"></div>
                   </div>
                 </div>
               </div>

               <div class="mt-6 pt-6 border-t border-ctp-surface0">
                 <p class="text-ctp-subtext1 italic">
                   <span class="text-ctp-peach font-bold">Fun Fact:</span> 
                   I spent more time configuring the perfect Minecraft server properties file than I actually spent playing on the server.
                 </p>
               </div>
             </div>
          </div>

          <!-- Text Narrative -->
          <div>
            <h2 class="text-ctp-mauve font-bold text-lg mb-2 uppercase tracking-wide">Origin Story</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-ctp-text mb-6">From Server Admin to App Builder</h3>
            
            <div class="space-y-4 text-ctp-subtext0 leading-relaxed">
              <p>
                It started with the need to connect. I began by managing multiplayer servers for my friends, diving into config files to ensure we had the perfect environment to play. That control over the digital space sparked a curiosity: how does the rest of the web work?
              </p>
              <p>
                That curiosity led me to web personal profiles. I started tinkering with code, learning bits of HTML and CSS just to make things look cool. But the real acceleration came when I started learning from AI.
              </p>
              <p>
                AI became my mentor, helping me bridge the gap between "coding a little bit" and building full applications. Because of that, I'm now having a blast playing with code, building my own web apps, and turning those server-admin skills into fullstack development power.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}