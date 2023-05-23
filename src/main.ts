import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { dataReducers } from './app/store/dashboard.reducers';
import { DashboardResolverService } from './app/services/dashboard-resolver.service';
import { provideHttpClient } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    resolve: { users: DashboardResolverService },
  },
];
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore<any>({ users: dataReducers }),
  ],
}).catch((err) => console.error(err));
