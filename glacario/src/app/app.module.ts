import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import {APP_ROUTING} from './app.routes';


//SERVICIOS
import { ItilService } from './servicios/itil.service';
import { AmsService } from './servicios/ams.service';
import { ErpglosService } from './servicios/erp.service';
import { RpaService } from './servicios/rpa.service';
import { cljourneyService } from './servicios/cljourney.service';
import { dtScienceService } from './servicios/dtscience.service';
import { dbtService } from './servicios/dbt.service';
import { oracUnivService } from './servicios/oracuniv.service';
import { cmFoundationService} from './servicios/cmfoundation.service';
import { scrumService } from './servicios/scrum.service';
import { ssigmaService } from './servicios/ssigma.service';
import { mktgService } from './servicios/mktg.service';
import { gaOfferService } from './servicios/gaoffer.service';
import { navgtService } from './servicios/navgt.service';
import { acctngService } from './servicios/acctng.service';
import { genLedgerService } from './servicios/genledger.service'; 
import { CncService } from './servicios/cnc.service';
import { buscadorService } from './servicios/buscador.service'; 
import { SapService } from './servicios/sap.service';



//COMPONENTES 
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { BodyComponent } from './Componentes/body/body.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { IndiceComponent } from './Componentes/body/indice/indice.component';
import { DescripcionComponent } from './Componentes/descripcion/descripcion.component';
import { Tema1Component } from './Componentes/body/AMS/tema1.component';
import { Tema2Component } from './Componentes/body/ERP/tema2.component';
import { Tema3Component } from './Componentes/body/ITIL/tema3.component';
import { NavigateComponent } from './Componentes/body/navigate/navigate.component';
import { AccountingComponent } from './Componentes/body/accounting/accounting.component';
import { IntroduccionComponent } from './Componentes/body/introduccion/introduccion.component';
import { GenledgerComponent } from './Componentes/body/genledger/genledger.component';
import { RpaComponent } from './Componentes/body/rpa/rpa.component';
import { CljourneyComponent } from './Componentes/body/cljourney/cljourney.component';
import { DscienceComponent } from './Componentes/body/dscience/dscience.component';
import { DbtComponent } from './Componentes/body/dbt/dbt.component';
import { OracleUniComponent } from './Componentes/body/oracle-uni/oracle-uni.component';
import { SsigmaComponent } from './Componentes/body/ssigma/ssigma.component';
import { MktgComponent } from './Componentes/body/mktg/mktg.component';
import { GaofferComponent } from './Componentes/body/gaoffer/gaoffer.component';
import { ScrumComponent } from './Componentes/body/scrum/scrum.component';
import { CmnfundComponent } from './Componentes/body/cmnfund/cmnfund.component';
import { BuscadorComponent } from './Componentes/body/buscador/buscador.component';
import { CncComponent } from './Componentes/body/cnc/cnc.component';
import { SapComponent } from './Componentes/body/sap/sap.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IndiceComponent,
    DescripcionComponent,
    Tema1Component,
    Tema2Component,
    Tema3Component,
    NavigateComponent,
    AccountingComponent,
    IntroduccionComponent,
    GenledgerComponent,
    RpaComponent,
    CljourneyComponent,
    DscienceComponent,
    DbtComponent,
    OracleUniComponent,
    SsigmaComponent,
    MktgComponent,
    GaofferComponent,
    ScrumComponent,
    CmnfundComponent,
    BuscadorComponent,
    CncComponent,
    SapComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ItilService,
    AmsService,
    ErpglosService,
    RpaService,
    cljourneyService,
    dtScienceService,
    dbtService,
    oracUnivService,
    cmFoundationService,
    scrumService,
    ssigmaService,
    mktgService,
    gaOfferService,
    navgtService,
    acctngService,
    genLedgerService,
    CncService, 
    SapService,
    buscadorService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
