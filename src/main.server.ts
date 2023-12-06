import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
//import { HomeComponent } from './app/home/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);
//const bootstrap = () => bootstrapApplication(HomeComponent, config);

export default bootstrap;
