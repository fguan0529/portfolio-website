import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClimatelensComponent } from './climatelens/climatelens.component';
import { InvestmentMicrositeComponent } from './investment-microsite/investment-microsite.component';
import { PortfolioWebsiteDetailsComponent } from './portfolio-website-details/portfolio-website-details.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'climatelens', component: ClimatelensComponent,  },
  { path: 'investment-microsite', component: InvestmentMicrositeComponent },
  { path: 'portfolio-website-project', component: PortfolioWebsiteDetailsComponent },
  { path: 'case-studies', component: CaseStudiesComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
