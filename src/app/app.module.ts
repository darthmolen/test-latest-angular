import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

import { TimesVisitedService } from './services/times-visited.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
  MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoute = [
  {path: '', canActivate: [IsAuthenticatedGuard], component: StartPageComponent, pathMatch: 'full'},
  {path: 'help', canActivate: [IsAuthenticatedGuard], component: HelpComponent},
  {path: 'dashboard', canActivate: [IsAuthenticatedGuard], component: DashboardComponent},
  {path: 'sampletable', canActivate:[IsAuthenticatedGuard], component: SampleTableComponent},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
   declarations: [
      AppComponent,
      HelpComponent,
      NavMenuComponent,
      DashboardComponent,
      SampleTableComponent,
      StartPageComponent,
      PageNotFoundComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoute),
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
   ],
   providers: [
      TimesVisitedService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
