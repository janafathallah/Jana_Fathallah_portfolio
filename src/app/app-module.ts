import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Panel } from './panel/panel';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Chatbot } from './chatbot/chatbot';
import { Internships } from './internships/internships';
import { GradProject } from './grad-project/grad-project';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Home,
    Panel,
    About,
    Skills,
    Projects,
    Chatbot,
    Internships,
    GradProject,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
