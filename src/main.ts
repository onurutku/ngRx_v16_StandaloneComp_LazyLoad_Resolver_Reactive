import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { dataReducers } from './app/NGRX/store/dashboard.reducers';
import { DashboardResolverService } from './app/NGRX/services/dashboard-resolver.service';
import { provideHttpClient } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/NGRX/dashboard-ngrx/dashboard-ngrx.component').then(
        (m) => m.DashboardNgrxComponent
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
