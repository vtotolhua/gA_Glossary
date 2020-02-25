import{ RouterModule, Routes, ROUTES } from '@angular/router';

import{ Tema1Component } from './Componentes/body/AMS/tema1.component';
import{Tema2Component} from './Componentes/body/ERP/tema2.component';
import{Tema3Component} from './Componentes/body/ITIL/tema3.component';
import{NavigateComponent} from './Componentes/body/navigate/navigate.component';
import { AccountingComponent } from './Componentes/body/accounting/accounting.component';
import { IntroduccionComponent } from './Componentes/body/introduccion/introduccion.component';
import { GenledgerComponent } from './Componentes/body/genledger/genledger.component';
import {RpaComponent} from './Componentes/body/rpa/rpa.component';
import {CljourneyComponent} from './Componentes/body/cljourney/cljourney.component';
import {DscienceComponent} from './Componentes/body/dscience/dscience.component';
import {DbtComponent} from './Componentes/body/dbt/dbt.component';
import {OracleUniComponent} from './Componentes/body/oracle-uni/oracle-uni.component';
import {SsigmaComponent} from './Componentes/body/ssigma/ssigma.component';
import {MktgComponent} from './Componentes/body/mktg/mktg.component';
import {GaofferComponent} from './Componentes/body/gaoffer/gaoffer.component';
import { ScrumComponent } from './Componentes/body/scrum/scrum.component';
import {CmnfundComponent} from './Componentes/body/cmnfund/cmnfund.component';
import { BuscadorComponent } from './Componentes/body/buscador/buscador.component';
import { CncComponent } from './Componentes/body/cnc/cnc.component';

const APP_ROUTES: Routes = [
{path: 'tema1', component: Tema1Component}, 
{path: 'tema2', component: Tema2Component},
{path: 'tema3', component: Tema3Component},
{path: 'navigate', component: NavigateComponent},
{path: 'accounting', component: AccountingComponent},
{path: 'introduccion', component: IntroduccionComponent},
{path: 'genledger', component: GenledgerComponent},
{path: 'rpa', component: RpaComponent},
{path: 'cljourney', component: CljourneyComponent},
{path: 'dscience', component: DscienceComponent},
{path: 'dbt', component: DbtComponent},
{path: 'oracluni', component: OracleUniComponent},
{path: 'ssigma', component: SsigmaComponent},
{path: 'mktg', component: MktgComponent},
{path: 'gaoffer', component: GaofferComponent},
{path: 'scrum', component: ScrumComponent},
{path: 'cmnfund', component: CmnfundComponent},
{path: 'Cnc', component: CncComponent},
{path: 'buscar/:termino', component: BuscadorComponent},

{path: '**', pathMatch: 'full', redirectTo: 'introduccion' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

