import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InputComponent } from './app/input/input.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
