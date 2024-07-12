import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
bootstrapApplication(UserComponent).catch((err) => console.error(err));
