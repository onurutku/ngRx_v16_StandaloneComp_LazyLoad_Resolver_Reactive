import { Injectable, DestroyRef } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class DashboardResolverService {
  constructor(
    private service: DashboardService,
    private destroyRef: DestroyRef
  ) {}
  resolve() {
    this.service
      .getUsers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
