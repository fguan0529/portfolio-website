import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ClimatelensComponent } from './climatelens/climatelens.component';
import { InvestmentMicrositeComponent } from './investment-microsite/investment-microsite.component';
import { PortfolioWebsiteDetailsComponent } from './portfolio-website-details/portfolio-website-details.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ProjectsNavbarComponent } from './projects-navbar/projects-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ClimatelensComponent,
    InvestmentMicrositeComponent,
    PortfolioWebsiteDetailsComponent,
    CaseStudiesComponent,
    ProjectsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbTooltipModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
